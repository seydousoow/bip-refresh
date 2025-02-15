// noinspection JSNonASCIINames,NonAsciiCharacters

import { Component, DestroyRef, inject, model, ModelSignal, OnInit, output, OutputEmitterRef, Signal, signal, WritableSignal } from '@angular/core';
import { IFlightSearchModel } from '../../../../model/flight-search.model';
import { addDays, addMonths, format, isBefore } from 'date-fns';
import { Button } from 'primeng/button';
import airports, { IAirportModel } from '../../../../model/airports';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ɵTypedOrUntyped } from '@angular/forms';
import { TTravelClass } from '../../../../model/amadeus/flight-offer-price.model';
import { FilterService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { SEARCH_DATA } from '../../../../app.config';
import { ObjectUtils } from 'primeng/utils';
import { AirportSelectionItemComponent } from '../../airport-selection-item.component';
import { IftaLabel } from 'primeng/iftalabel';
import { DatePicker } from 'primeng/datepicker';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SelectButton } from 'primeng/selectbutton';
import { ISelectOption } from '../../../../model/commons.model';

interface IFlightUpdateForm {
  originLocationCode: FormControl<string>
  destinationLocationCode: FormControl<string>
  departureDate: FormControl<Date>
  returnDate: FormControl<Date | null>
  adults: FormControl<number>
  children: FormControl<number>
  infants: FormControl<number>
  nonStop: FormControl<boolean>
  oneWay: FormControl<boolean>
  travelClass: FormControl<TTravelClass>
}

@Component({
  selector: 'bip-listing-form-update, [bipListingFormUpdate]',
  imports: [Button, ReactiveFormsModule, AutoComplete, AirportSelectionItemComponent, IftaLabel, DatePicker, SelectButton],
  templateUrl: './listing-form-update.component.html'
})
export class ListingFormUpdateComponent implements OnInit {

  readonly searchForm: ModelSignal<IFlightSearchModel> = model.required<IFlightSearchModel>();
  readonly update: OutputEmitterRef<void> = output<void>();

  readonly updating: WritableSignal<boolean> = signal<boolean>(false);
  readonly airports: Signal<IAirportModel[]> = signal<IAirportModel[]>(airports).asReadonly();

  readonly minDate: Date = new Date();
  readonly maxDate: Date = addMonths(new Date(), 6);
  readonly returnMinDate: WritableSignal<Date> = signal(addDays(new Date(), 1));

  readonly stateOptions: ISelectOption<boolean>[] = [{ label: 'Aller-retour', value: false }, { label: 'Aller simple', value: true }];

  readonly form = new FormGroup<IFlightUpdateForm>({
    originLocationCode: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Z]{3}$/)] }),
    destinationLocationCode: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Z]{3}$/)] }),
    departureDate: new FormControl(new Date(), { nonNullable: true, validators: [Validators.required] }),
    returnDate: new FormControl(null),
    adults: new FormControl(1, { nonNullable: true, validators: [Validators.required, Validators.min(1), Validators.max(9)] }),
    children: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(9)] }),
    infants: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(9)] }),
    nonStop: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
    oneWay: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
    travelClass: new FormControl('ECONOMY', { nonNullable: true, validators: [Validators.required] })
  });

  private readonly _filteredSelection: WritableSignal<IAirportModel[]> = signal<IAirportModel[]>(this.airports());
  private readonly filterService: FilterService = inject(FilterService);
  private readonly ref: DestroyRef = inject(DestroyRef);

  get f(): ɵTypedOrUntyped<IFlightUpdateForm, IFlightUpdateForm, { [p: string]: AbstractControl }> {
    return this.form.controls;
  }

  get filteredSelection(): IAirportModel[] {
    return this._filteredSelection.asReadonly()();
  }

  ngOnInit(): void {
    this.refreshForm();
    this.f.oneWay.valueChanges.pipe(takeUntilDestroyed(this.ref)).subscribe((oneWay: boolean) => {
      if (oneWay) this.f.returnDate.disable(); else this.f.returnDate.enable();
      this.f.returnDate.setValue(oneWay ? null : this.returnMinDate());
    });

    this.f.departureDate.valueChanges.pipe(takeUntilDestroyed(this.ref)).subscribe((date: Date) => {
      this.returnMinDate.set(addDays(date, 1));
      if (!this.f.oneWay.value && (isBefore(this.f.returnDate.value ?? new Date(), this.returnMinDate()))) {
        this.f.returnDate.setValue(this.returnMinDate());
      }
    });
  }

  public filterGroupedCity(query: string | undefined = undefined): void {
    if (!query || query.length === 0) {
      this._filteredSelection.set(this.airports());
    } else {
      this._filteredSelection.set(this.filterService.filter(this.airports(), ['iata', 'airportName', 'countryName', 'city'], query, "contains") ?? []);
    }
  }

  public toggleUpdate(): void {
    if (this.updating()) {
      this.checkFormValues();
    } else {
      this.updating.set(true);
    }
  }

  public formatDate(date: Date): string {
    return format(new Date(date), 'EEEE d MMMM');
  }

  public airportDescription(iata: string | null): string {
    if (!iata) {
      return '';
    }
    const airport = airports.find(s => s.iata === iata);
    if (airport) {
      return `${airport.city} (${airport.iata})`;
    }
    return iata;
  }

  public refreshForm(): void {
    this.updating.set(false);
    this.form.patchValue({
      ...this.searchForm(),
      originLocationCode: this.searchForm().departure ?? '',
      destinationLocationCode: this.searchForm().destination ?? '',
      departureDate: new Date(this.searchForm().departureDate),
      returnDate: this.searchForm().oneWay ? null : new Date(this.searchForm().returnDate ?? new Date())
    });
  }

  private checkFormValues(): void {
    const form: IFlightSearchModel = { ...this.searchForm(), ...this.form.getRawValue(), departure: this.f.originLocationCode.value, destination: this.f.destinationLocationCode.value };
    if (ObjectUtils.deepEquals(form, this.searchForm())) {
      this.refreshForm();
    } else {
      localStorage.setItem(SEARCH_DATA, JSON.stringify(form));
      this.searchForm.set(form);
      this.update.emit();
      this.updating.set(false);
    }
  }

}
