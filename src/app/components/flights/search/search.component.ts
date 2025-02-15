import { Component, computed, ElementRef, inject, OnInit, signal, viewChild, WritableSignal } from '@angular/core';
import Fuse, { IFuseOptions } from 'fuse.js';
import { FormsModule } from '@angular/forms';
import { addDays, addMonths, addWeeks, isBefore, parseISO } from 'date-fns';
import { IFlightSearchModel } from '../../../model/flight-search.model';
import airports, { IAirportModel } from '../../../model/airports';
import { DICTIONARIES, FLIGHT_OFFER, SEARCH_DATA } from '../../../app.config';
import { Router } from '@angular/router';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { SelectButton } from 'primeng/selectbutton';
import { ISelectOption } from '../../../model/commons.model';
import { OutsideClickDirective } from '../../../directives/outside-click.component';
import { Badge } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { TTravelClass } from '../../../model/amadeus/flight-offer-price.model';

@Component({
  selector: 'bip-search',
  imports: [FormsModule, DatePicker, FloatLabel, InputGroup, InputGroupAddon, InputText, SelectButton, OutsideClickDirective, Badge, Button],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  readonly activeSearch = signal<'depart' | 'return' | null>(null);
  searchModel: IFlightSearchModel = {
    oneWay: false,
    nonStop: false,
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: 'ECONOMY',
    ccy: 'XOF',
    departure: '',
    destination: '',
    departureDate: new Date(),
    returnDate: addMonths(new Date(), 1)
  };
  readonly minDate: Date = new Date();
  readonly maxDate: Date = addMonths(new Date(), 6);
  readonly returnMinDate: WritableSignal<Date> = signal(addDays(new Date(), 1));

  readonly stateOptions: ISelectOption<boolean>[] = [{ label: 'Aller-retour', value: false }, { label: 'Aller simple', value: true }];
  readonly travelClasses: ISelectOption<TTravelClass>[] = [
    { label: 'Économique', value: 'ECONOMY' },
    { label: 'Éco premium', value: 'PREMIUM_ECONOMY' },
    { label: 'Affaires', value: 'BUSINESS' },
    { label: 'Première', value: 'FIRST' }
  ];
  classSelection = false;
  private searchTermDepart = signal('');
  private searchTermReturn = signal('');
  private fuseBlock = viewChild<ElementRef<HTMLElement>>('fuse__block');
  private listOfAirports: IAirportModel[] = airports;
  private readonly fuseOptions: IFuseOptions<IAirportModel> = {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: ['iata', 'city', 'state', 'airportName', 'countryName']
  };
  private fuse: Fuse<IAirportModel> = new Fuse(this.listOfAirports, this.fuseOptions);
  protected readonly filteredResults = computed(() => {
    const term = this.activeSearch() === 'depart' ? this.searchTermDepart() : this.searchTermReturn();

    if (term.length < 2) return [];

    return this.fuse.search(term)
      .sort((a, b) => (a.score ?? 0) - (b.score ?? 0))
      .map(item => item.item)
      .slice(0, 10);
  });
  private readonly router: Router = inject(Router);
  private readonly messageService: MessageService = inject(MessageService);

  get fuseKeySearchDepart(): string {
    return this.searchTermDepart();
  }

  set fuseKeySearchDepart(value: string) {
    this.searchTermDepart.set(value);
    this.activeSearch.set('depart');
    this.fuseSearch(true);
  }

  get fuseKeySearchReturn(): string {
    return this.searchTermReturn();
  }

  set fuseKeySearchReturn(value: string) {
    this.searchTermReturn.set(value);
    this.activeSearch.set('return');
    this.fuseSearch(false);
  }

  get selectedTravelClass(): string {
    return this.travelClasses.find(s => s.value === this.searchModel.travelClass)?.label ?? '';
  }

  get blockIncreaseNonAdultPassenger(): boolean {
    const totalPassengers = this.searchModel.adults + this.searchModel.children + this.searchModel.infants;
    return totalPassengers < 9 && (this.searchModel.infants + this.searchModel.children) < this.searchModel.adults * 2;
  }

  get blockDecreaseAdultPassenger(): boolean {
    const totalNonAdultPassengers = this.searchModel.children + this.searchModel.infants;
    const maxPassengersAllowedByAdults = (this.searchModel.adults - 1) * 2;
    return (this.searchModel.adults === 1 || totalNonAdultPassengers > maxPassengersAllowedByAdults);
  }

  ngOnInit(): void {
    sessionStorage.removeItem(FLIGHT_OFFER);
    sessionStorage.removeItem(DICTIONARIES);
    const savedData = localStorage.getItem(SEARCH_DATA);
    if (savedData) {
      this.parseDataFromLocalStorage(savedData);
    }
  }

  increasePassengerCount(key: 'adults' | 'children' | 'infants'): void {
    const totalPassengers = this.searchModel.adults + this.searchModel.children + this.searchModel.infants;

    if (key === 'adults' && totalPassengers < 9) {
      this.searchModel = { ...this.searchModel, adults: this.searchModel.adults + 1 };
    } else if (key === 'children' && this.blockIncreaseNonAdultPassenger) {
      this.searchModel = { ...this.searchModel, children: this.searchModel.children + 1 };
    } else if (key === 'infants' && this.blockIncreaseNonAdultPassenger) {
      this.searchModel = { ...this.searchModel, infants: this.searchModel.infants + 1 };
    }
  }

  decreasePassengerCount(key: 'adults' | 'children' | 'infants'): void {
    if (key === 'adults' && !this.blockDecreaseAdultPassenger) {
      this.searchModel = { ...this.searchModel, adults: this.searchModel.adults - 1 };
    } else if (key === 'children' && this.searchModel.children > 0) {
      this.searchModel = { ...this.searchModel, children: this.searchModel.children - 1 };
    } else if (key === 'infants' && this.searchModel.infants > 0) {
      this.searchModel = { ...this.searchModel, infants: this.searchModel.infants - 1 };
    }
  }

  searchFlight(): void {
    if (this.fuseKeySearchDepart?.length > 0) {
      this.searchModel.departure = this.listOfAirports.find(s => `${s.airportName}, ${s.state}` === this.fuseKeySearchDepart)?.iata ?? null;
    }

    if (this.fuseKeySearchReturn?.length > 0) {
      this.searchModel.destination = this.listOfAirports.find(s => `${s.airportName}, ${s.state}` === this.fuseKeySearchReturn)?.iata ?? null;
    }

    if (this.searchModel.oneWay) {
      this.searchModel.returnDate = null;
    }

    if (this.areAirportsValidAndDifferent() && this.areDatesValid()) {
      localStorage.setItem(SEARCH_DATA, JSON.stringify(this.searchModel));
      void this.router.navigate(['flights']);
    }
  }

  fuseSearch(isDepart: boolean): void {
    const fuseBlock = this.fuseBlock();
    if (!fuseBlock) return;

    this.activeSearch.set(isDepart ? 'depart' : 'return');

    if (this.filteredResults().length > 0) {
      fuseBlock.nativeElement.style.display = 'block';
    } else {
      this.closeSuggestion();
    }
  }

  updateSelection(item: IAirportModel | null): void {
    if (item === null) {
      setTimeout(() => this.closeSuggestion(), 200);
      return;
    }

    const airportString = `${item.airportName}, ${item.state}`;
    if (this.activeSearch() === 'depart') {
      this.searchTermDepart.set(airportString);
    } else {
      this.searchTermReturn.set(airportString);
    }

    this.closeSuggestion();
  }

  closeSuggestion(): void {
    this.activeSearch.set(null);
    const fuseBlock = this.fuseBlock();
    if (fuseBlock) {
      fuseBlock.nativeElement.style.display = 'none';
    }
  }

  onDepartureDateChange(changes: Date) {
    this.searchModel = { ...this.searchModel, returnDate: addWeeks(changes, 1) };
    this.returnMinDate.set(addDays(changes, 1));
  }

  private areAirportsValidAndDifferent(): boolean {
    if (!this.searchModel.departure) {
      this.messageService.add({ detail: 'Veuillez sélectionner le lieu de départ' });
      return false;
    }
    if (!this.searchModel.destination) {
      this.messageService.add({ detail: 'Veuillez sélectionner le lieu d\'arrivée' });
      return false;
    }
    if (this.searchModel.departure.toLowerCase() === this.searchModel.destination.toLowerCase()) {
      this.messageService.add({ detail: 'Les lieux de départ et d\'arrivée ne peuvent pas être identique' });
      return false;
    }
    return true;
  }

  private areDatesValid(): boolean {
    const today = new Date();
    const departDate = this.searchModel.departureDate ? parseISO(this.searchModel.departureDate.toString()) : null;
    const returnDate = this.searchModel.returnDate ? parseISO(this.searchModel.returnDate.toString()) : null;

    if (!departDate) {
      this.messageService.add({ detail: 'Please select a departure date' });
      return false;
    }

    if (isBefore(departDate, today)) {
      this.messageService.add({ detail: 'Departure date must be in the future' });
      return false;
    }

    if (!this.searchModel.oneWay) {
      if (!returnDate) {
        this.messageService.add({ detail: 'Please select a return date' });
        return false;
      }

      if (isBefore(returnDate, addDays(departDate, 1))) {
        this.messageService.add({ detail: 'Return date must be after departure date' });
        return false;
      }
    }

    return true;
  }

  private parseDataFromLocalStorage(savedData: string): void {
    const parsedData = JSON.parse(savedData) as IFlightSearchModel;

    const departureDate = parsedData.departureDate ? new Date(parsedData.departureDate) : this.minDate;
    const returnDate = parsedData.returnDate ? new Date(parsedData.returnDate) : this.returnMinDate();

    this.searchModel = {
      ...parsedData,
      oneWay: parsedData.oneWay ?? false,
      nonStop: parsedData.nonStop ?? false,
      adults: parsedData.adults ?? 1,
      children: parsedData.children ?? 0,
      infants: parsedData.infants ?? 0,
      travelClass: parsedData.travelClass ?? 'ECONOMY',
      ccy: parsedData.ccy ?? 'XOF',
      departureDate: isBefore(departureDate, this.minDate) ? this.minDate : departureDate,
      returnDate: isBefore(returnDate, this.returnMinDate()) ? this.returnMinDate() : returnDate
    };

    if (parsedData.departure) {
      const departAirport = this.listOfAirports.find(a => a.iata === parsedData.departure);
      if (departAirport) {
        this.searchTermDepart.set(`${departAirport.airportName}, ${departAirport.state}`);
      }
    }

    if (parsedData.destination) {
      const returnAirport = this.listOfAirports.find(a => a.iata === parsedData.destination);
      if (returnAirport) {
        this.searchTermReturn.set(`${returnAirport.airportName}, ${returnAirport.state}`);
      }
    }
  }
}

