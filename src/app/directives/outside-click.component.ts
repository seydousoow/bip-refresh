import { Directive, ElementRef, HostListener, output } from '@angular/core';

@Directive({
  selector: '[outsideClick]'
})
export class OutsideClickDirective {
  outsideClick = output<void>();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.outsideClick.emit();
    }
  }
}
