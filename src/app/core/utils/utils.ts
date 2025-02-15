import { FormControl } from '@angular/forms';

export function isControlTouched(control: FormControl<any> | undefined): boolean {
  return control?.touched ?? false;
}

function trim(str: string): any {
  str = makeString(str);
  const characters = '\\s';
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
}

function makeString(object: string | null): string {
  if (object == null) return '';
  return '' + object;
}

function underscored(str: any): string {
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
}

function capitalize(str: string, lowercaseRest: boolean = true) {
  str = makeString(str);
  const remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();
  return str.charAt(0).toUpperCase() + remainingChars;
}

export function humanize(str: string): string {
  const value = underscored(str).replace(/_id$/, '').replace(/_/g, ' ');
  return capitalize(trim(value));
}
