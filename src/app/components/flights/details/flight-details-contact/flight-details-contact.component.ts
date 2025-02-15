// noinspection JSNonASCIINames,NonAsciiCharacters

import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ɵTypedOrUntyped } from '@angular/forms';
import { TPhoneType } from '../../../../model/amadeus/flight-offer-price.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject } from '@angular/core';
import CountryDialCodes, { ICountryDialCode } from '../../../../model/country-dial-codes';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { mustMatchValidator } from '../../../../core/validators/CustomValidators';
import { FloatLabel } from 'primeng/floatlabel';
import { CountryCode, isValidNumber } from 'libphonenumber-js';
import { distinctUntilChanged, filter } from 'rxjs';
import { isControlTouched } from '../../../../core/utils/utils';
import { ISelectOption } from '../../../../model/commons.model';
import { countries } from '../../../../model/countries';

interface IPhoneForm {
  deviceType: FormControl<TPhoneType>;
  countryCallingCode: FormControl<string>;
  number: FormControl<string>;
}

interface IAddressForm {
  lines: FormControl<string>;
  countryCode: FormControl<string>;
  cityName: FormControl<string>;
  stateName: FormControl<string>;
  postalBox: FormControl<string>;
}

interface IContactForm {
  emailAddress: FormControl<string>;
  confirmEmail: FormControl<string>;
  phone: FormGroup<IPhoneForm>;
  address: FormGroup<IAddressForm>;
}

@Component({
  selector: '[bipFlightDetailsContact]',
  imports: [ReactiveFormsModule, InputGroup, InputGroupAddon, InputText, Select, FloatLabel],
  templateUrl: './flight-details-contact.component.html'
})
export class FlightDetailsContactComponent {

  readonly dialCodes: ICountryDialCode[] = CountryDialCodes;
  readonly countryOptions: ISelectOption[] = countries.map(s => ({ label: s.name, value: s.code }));
  protected readonly isControlTouched = isControlTouched;

  readonly selectedCountry: FormControl<ICountryDialCode> = new FormControl<ICountryDialCode>(this.dialCodes.find(({ code }) => code === 'SN')!, { nonNullable: true });

  readonly contactForm: FormGroup<IContactForm> = new FormGroup<IContactForm>({
    emailAddress: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    confirmEmail: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    phone: new FormGroup<IPhoneForm>({
      number: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d{1,15}$/)] }),
      deviceType: new FormControl<TPhoneType>('MOBILE', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^(MOBILE|LANDLINE|FAX)$/)] }),
      countryCallingCode: new FormControl('221', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d{1,4}$/)] })
    }),
    address: new FormGroup<IAddressForm>({
      lines: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
      cityName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      stateName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      postalBox: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      countryCode: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Z]{2}$/)] })
    })
  }, {
    validators: [mustMatchValidator('emailAddress', 'confirmEmail')]
  });

  private readonly ref: DestroyRef = inject(DestroyRef);

  constructor() {
    this.contactForm.controls.address.controls.stateName.valueChanges.pipe(takeUntilDestroyed(this.ref)).subscribe(cityName => {
      this.contactForm.controls.address.controls.cityName.setValue(cityName);
    });
    this.selectedCountry.valueChanges.pipe(takeUntilDestroyed(this.ref), distinctUntilChanged()).subscribe(({ dial_code }) => {
      this.contactForm.controls.phone.controls.countryCallingCode.setValue(dial_code.replaceAll(/\D/g, ''));
      this.phone.number.touched && this.checkPhoneValidity();
    });
    this.phone.number.valueChanges
      .pipe(takeUntilDestroyed(this.ref), filter(s => this.phone.number.touched && s.length > 4))
      .subscribe(() => this.checkPhoneValidity());
  }

  get f(): ɵTypedOrUntyped<IContactForm, IContactForm, { [p: string]: AbstractControl }> {
    return this.contactForm.controls;
  }

  get phone(): ɵTypedOrUntyped<IPhoneForm, IPhoneForm, { [p: string]: AbstractControl }> {
    return this.contactForm.controls.phone.controls;
  }

  get address(): ɵTypedOrUntyped<IAddressForm, IAddressForm, { [p: string]: AbstractControl }> {
    return this.contactForm.controls.address.controls;
  }

  private checkPhoneValidity(): void {
    if (!this.phone.number.errors && !isValidNumber(this.phone.number.value, this.selectedCountry.value.code.toUpperCase() as CountryCode)) {
      this.phone.number.setErrors({ validPhone: true });
    }
  }
}
