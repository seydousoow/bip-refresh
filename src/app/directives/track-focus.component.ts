import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[trackFocus]',
  exportAs: 'trackFocus'
})
export class TrackFocusDirective {
  @HostBinding('class.my-focused-element') isFocused: boolean = false;

  @HostListener('focus') onFocus() {
    this.isFocused = true;
  }

  @HostListener('blur') onBlur() {
    this.isFocused = false;
  }
}
