import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CountryCode, isValidNumber } from 'libphonenumber-js';

export function mustMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    if (!(formGroup instanceof FormGroup)) {
      return null;
    }

    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (control === null || matchingControl === null || control.untouched || matchingControl.untouched) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else if (matchingControl.errors) {
      delete matchingControl.errors['mustMatch'];
      if (Object.keys(matchingControl.errors).length === 0) {
        matchingControl.setErrors(null);
      }
    }

    return null;
  };
}

export function validPhone(countryCodeControlName: string, telephoneControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    if (!(formGroup instanceof FormGroup)) {
      return null;
    }
    const country = formGroup.get(countryCodeControlName);
    const telephone = formGroup.get(telephoneControlName);
    if (country === null || telephone === null || telephone.hasError('required')) {
      return null;
    }
    if (!isValidNumber(telephone.value, country.value.toUpperCase() as CountryCode)) {
      telephone.setErrors({ validPhone: true });
    } else if (telephone.errors) {
      delete telephone.errors['validPhone'];
    }

    return null;
  };
}
