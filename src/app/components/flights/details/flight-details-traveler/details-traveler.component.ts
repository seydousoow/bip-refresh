// noinspection JSNonASCIINames,NonAsciiCharacters

import { AfterViewInit, Component, DestroyRef, inject, input, InputSignal, Signal, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule, ɵTypedOrUntyped } from '@angular/forms';
import { IDocumentTravelerForm, IFlightTravelerForm } from '../flight-details.component';
import { isControlTouched } from '../../../../core/utils/utils';
import { InputText } from 'primeng/inputtext';
import { TDocumentType, TGender } from '../../../../model/amadeus/flight-offer-price.model';
import { TrackFocusDirective } from '../../../../directives/track-focus.component';
import { IftaLabel } from 'primeng/iftalabel';
import { ISelectOption } from '../../../../model/commons.model';
import { RadioButton } from 'primeng/radiobutton';
import { subDays, subYears } from 'date-fns';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { countries } from '../../../../model/countries';
import { TitleCasePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TravelerTypeNarrative } from '../../../../model/amadeus/flight-offer.model';

@Component({
  selector: '[bipDetailsTraveler]',
  imports: [ReactiveFormsModule, InputText, TrackFocusDirective, IftaLabel, RadioButton, DatePicker, Select, TitleCasePipe],
  templateUrl: './details-traveler.component.html'
})
export class DetailsTravelerComponent implements AfterViewInit {

  readonly returnDate = input.required<Date>();
  readonly form: InputSignal<FormGroup<IFlightTravelerForm>> = input.required<FormGroup<IFlightTravelerForm>>();

  readonly narrative = TravelerTypeNarrative;
  readonly genders: ISelectOption<TGender>[] = [{ label: 'Homme', value: 'MALE' }, { label: 'Femme', value: 'FEMALE' }];
  readonly documentTypeOptions: ISelectOption<TDocumentType>[] = [
    { label: 'Passeport', value: 'PASSPORT' }, { label: 'Carte d\'identité', value: 'IDENTITY_CARD' }, { label: 'Visa', value: 'VISA' }
  ];
  readonly countryOptions: ISelectOption[] = countries.map(s => ({ label: s.name, value: s.code }));

  readonly today: Signal<Date> = signal(new Date()).asReadonly();
  readonly minDate: WritableSignal<Date | undefined> = signal<Date | undefined>(undefined);
  readonly maxDate: WritableSignal<Date | undefined> = signal<Date | undefined>(undefined);
  readonly isControlTouched = isControlTouched;

  private readonly ref: DestroyRef = inject(DestroyRef);

  get f(): ɵTypedOrUntyped<IFlightTravelerForm, IFlightTravelerForm, { [p: string]: AbstractControl }> {
    return this.form().controls;
  }

  get document(): ɵTypedOrUntyped<IDocumentTravelerForm, IDocumentTravelerForm, { [p: string]: AbstractControl }> | undefined {
    return this.f.document?.controls;
  }

  ngAfterViewInit(): void {
    const date = this.returnDate();
    if (this.f.dateOfBirth && date !== undefined) {
      const passenger = this.f.travelerType.value;
      if (['SEATED', 'HELD_INFANT'].includes(passenger)) {
        this.minDate.set(new Date(date.getFullYear() - 2, date.getMonth(), date.getDate()));
        this.maxDate.set(subDays(this.today(), 1));
      } else if (['YOUNG', 'CHILD'].includes(passenger)) {
        this.minDate.set(new Date(date.getFullYear() - 12, date.getMonth(), date.getDate() + 1));
        this.maxDate.set(new Date(date.getFullYear() - 2, date.getMonth(), date.getDate()));
      } else {
        this.minDate.set(subYears(this.today(), 100));
        this.maxDate.set(new Date(date.getFullYear() - 12, date.getMonth(), date.getDate()));
      }
    }

    if (this.f.document) {
      this.f.document.controls.issuanceCountry.valueChanges.pipe(takeUntilDestroyed(this.ref)).subscribe(country => {
        this.document?.issuanceLocation?.setValue(country);
        if (this.document?.nationality.value.length === 0) {
          this.document?.nationality?.setValue(country);
        }
      });
      this.document?.nationality.valueChanges.pipe(takeUntilDestroyed(this.ref)).subscribe(s => this.document?.birthPlace.setValue(s));
    }
  }
}
