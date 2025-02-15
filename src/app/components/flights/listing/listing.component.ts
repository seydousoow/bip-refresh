import { Component, DestroyRef, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Skeleton } from 'primeng/skeleton';
import { IFlightSearchModel } from '../../../model/flight-search.model';
import { DICTIONARIES, FLIGHT_OFFER, SEARCH_DATA } from '../../../app.config';
import { format } from 'date-fns';
import { AmadeusService } from '../../../services/amadeus.service';
import { IFlightOfferRequestModel } from '../../../model/amadeus/flight-request.model';
import { SelectionModel } from '@angular/cdk/collections';
import { debounceTime, retry, take } from 'rxjs/operators';
import airlines, { TAirline } from '../../../model/airlines';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { ListingItemComponent } from '../listing-item/listing-item.component';
import { ISelectOption } from '../../../model/commons.model';
import { IDictionaries, IFlightOffer, IItinerary } from '../../../model/amadeus/flight-offer-price.model';
import { IFlightOfferResponse } from '../../../model/amadeus/flight-offer.model';
import { FlightListingFilterComponent } from '../flight-search-filter/flight-listing-filter.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { ScrollTop } from 'primeng/scrolltop';
import { ListingFormUpdateComponent } from './listing-update/listing-form-update.component';

export interface FilterFormGroup {
  maxPrice: FormControl<number>,
  stopover: FormControl<boolean>,
}

type TSort = 'BEST' | 'CHEAPEST' | 'FASTEST';

@Component({
  selector: 'bip-listing',
  imports: [CommonModule, Skeleton, ReactiveFormsModule, ListingItemComponent, FlightListingFilterComponent, InfiniteScrollDirective, ScrollTop, ListingFormUpdateComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit {

  readonly loading: WritableSignal<boolean> = signal(true);
  readonly searchModel: WritableSignal<IFlightSearchModel> = signal<IFlightSearchModel>({} as IFlightSearchModel);
  displayedFlights: IFlightOffer[] = [];
  airlines: TAirline[] = [];
  airlinesSelection!: SelectionModel<string>;
  filterFormGroup!: FormGroup<FilterFormGroup>;

  totalElements = 0;
  currentPage = 0;
  readonly elementPerPage = 20;

  result!: IFlightOfferResponse;
  sortOptions: ISelectOption<TSort>[] = [
    { label: 'Meilleurs résultats', value: 'BEST', selected: true },
    { label: 'Le moins cher', value: 'CHEAPEST', selected: false },
    { label: 'Le plus rapide', value: 'FASTEST', selected: false }
  ];
  private readonly _maxPriceRange: Signal<number> = signal(10_000_000).asReadonly();
  private flights: IFlightOffer[] = [];
  private readonly durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?/;

  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);
  private readonly amadeus: AmadeusService = inject(AmadeusService);
  private readonly ref: DestroyRef = inject(DestroyRef);

  private readonly sortFunctions: { [key in TSort]: (a: IFlightOffer, b: IFlightOffer) => number } = {
    CHEAPEST: (a, b) => parseFloat(a.price.grandTotal) - parseFloat(b.price.grandTotal),
    FASTEST: (a, b) => this.computeTotalMinutes(a.itineraries) - this.computeTotalMinutes(b.itineraries),
    BEST: (a, b) => Number(a.id) - Number(b.id)
  };

  get maxPriceRange(): number {
    return this._maxPriceRange();
  }

  get isLast(): boolean {
    return this.currentPage * this.elementPerPage >= this.totalElements;
  }

  loadMore(): void {
    if (this.isLast) return;
    this.currentPage++;
    const start = this.currentPage * this.elementPerPage;
    const end = Math.min(start + this.elementPerPage, this.totalElements);
    this.displayedFlights = [...this.displayedFlights, ...this.flights.slice(start, end)];
  }

  ngOnInit(): void {
    sessionStorage.removeItem(FLIGHT_OFFER);
    sessionStorage.removeItem(DICTIONARIES);
    const savedData = localStorage.getItem(SEARCH_DATA);
    if (!savedData) {
      this.handleInvalidSearch('No search criteria found');
      return;
    }

    try {
      const parsedData = JSON.parse(savedData) as IFlightSearchModel;
      if (!this.isValidSearchModel(parsedData)) {
        this.handleInvalidSearch('Invalid search criteria');
        return;
      }

      this.searchModel.set({ ...parsedData });
      this.fetchData();
    } catch (error) {
      this.handleInvalidSearch('Invalid search data');
    }
  }

  formatISO(date: Date | null | undefined): string {
    if (date === null || date === undefined) return '';
    return format(new Date(date), 'yyyy-MM-dd');
  }

  updateSort(value: TSort): void {
    this.loading.set(true);
    this.sortOptions.forEach(s => (s.selected = s.value === value));
    this.flights = [...this.result.data].toSorted(this.sortFunctions[value]);
    this.displayedFlights = this.flights.slice(0, this.elementPerPage);
    this.loading.set(false);
  }

  selectFlight(item: IFlightOffer): void {
    sessionStorage.setItem(FLIGHT_OFFER, JSON.stringify(item));
    sessionStorage.setItem(DICTIONARIES, JSON.stringify(this.result.dictionaries));
    void this.router.navigate(['flights', 'details']);
  }

  onSearchVariablesUpdate(): void {
    this.fetchData();
  }

  private isValidSearchModel(model: IFlightSearchModel): boolean {
    return model?.departure != null &&
      model?.destination != null &&
      model?.departureDate != null &&
      (model?.oneWay || model?.returnDate != null);
  }

  private handleInvalidSearch(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message
    });
    void this.router.navigate(['/']);
  }

  private computeSearchParams(): IFlightOfferRequestModel {
    const data: IFlightOfferRequestModel = {
      originLocationCode: this.searchModel().departure?.toUpperCase() ?? '',
      destinationLocationCode: this.searchModel().destination?.toUpperCase() ?? '',
      departureDate: this.formatISO(this.searchModel().departureDate),
      returnDate: this.searchModel().oneWay ? undefined : this.formatISO(this.searchModel().returnDate),
      nonStop: this.searchModel().nonStop,
      currencyCode: this.searchModel().ccy.toUpperCase(),
      adults: this.searchModel().adults,
      children: this.searchModel().children,
      infants: this.searchModel().infants,
      travelClass: this.searchModel().travelClass.toUpperCase()
    };

    const maxPrice = this.filterFormGroup?.controls.maxPrice.value ?? this.maxPriceRange;
    if (maxPrice < this.maxPriceRange) {
      data.maxPrice = maxPrice;
    }
    let excluded = ['6X'];
    if (this.airlinesSelection) {
      this.airlines.map(s => s.iata?.toUpperCase()).filter(s => !this.airlinesSelection.isSelected(s)).forEach(x => excluded.push(x));
    }
    data.excludedAirlineCodes = excluded.join(',');
    return data;
  }

  private fetchData(filtered: boolean = false): void {
    this.loading.set(true);
    this.amadeus.getFlights(this.computeSearchParams()).pipe(take(1), retry({ count: 1, delay: 1500 })).subscribe({
      next: data => {
        if (data.meta.count === 0) {
          this.loading.set(false);
          this.messageService.add({ severity: 'info', summary: 'Aucun vol trouvé', detail: 'Aucun vol trouvé pour les critères sélectionnés', life: 7000 });
          void this.router.navigate(['/']);
        } else {
          if (!filtered && data.dictionaries) {
            this.configureAirlines(data.dictionaries);
          }
          this.result = data;
          this.totalElements = data.meta?.count ?? 0;
          this.updateSort('BEST');
        }
      },
      error: error => {
        console.log(error);
        this.loading.set(false);
        void this.router.navigate(['/flights']);
      }
    });
  }

  private configureAirlines(dictionaries: IDictionaries) {
    this.loading.set(false);
    this.airlines = Object.entries(dictionaries.carriers ?? {})
      .map((s): TAirline => airlines.find(t => t.iata === s[0]) ?? { iata: s[0], name: s[1] });
    this.airlinesSelection = new SelectionModel<string>(true, this.airlines.map(s => s.iata));
    this.airlinesSelection.setSelection(...this.airlines.map(s => s.iata));

    const maxPrice = this.flights.length ? Math.max(...this.flights.map(s => Number(s.price.grandTotal ?? s.price.total ?? 0))) : this.maxPriceRange;
    this.filterFormGroup = new FormGroup(<FilterFormGroup>{
      stopover: new FormControl<boolean>(this.searchModel().nonStop ?? false, { nonNullable: true }),
      maxPrice: new FormControl<number>(maxPrice, { nonNullable: true })
    });

    merge(this.filterFormGroup.valueChanges, this.airlinesSelection.changed).pipe(takeUntilDestroyed(this.ref), debounceTime(1000)).subscribe(() => {
      this.searchModel.set({ ...this.searchModel(), nonStop: this.filterFormGroup.controls.stopover.value });
      this.fetchData(true);
    });
  }

  private computeTotalMinutes(durations: IItinerary[]): number {
    return durations.reduce((total, s) => {
      const match = this.durationRegex.exec(s.duration ?? '');
      const hours = match?.[1] ? parseInt(match[1], 10) : 0;
      const minutes = match?.[2] ? parseInt(match[2], 10) : 0;
      return total + hours * 60 + minutes;
    }, 0);
  }

}
