import { Component, inject, input, InputSignal, output } from '@angular/core';
import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TAirline } from '../../../model/airlines';
import { format, parseISO } from 'date-fns';
import airports from '../../../model/airports';
import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { OverlayBadge } from 'primeng/overlaybadge';
import { IFlightEndPoint, IFlightOffer, ISegment } from '../../../model/amadeus/flight-offer-price.model';

@Component({
  selector: 'bip-listing-item',
  imports: [UpperCasePipe, TitleCasePipe, Button, Avatar, OverlayBadge],
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css'],
  providers: [CurrencyPipe]
})
export class ListingItemComponent {
  flight: InputSignal<IFlightOffer> = input.required<IFlightOffer>();
  airlines: InputSignal<TAirline[]> = input.required<TAirline[]>();

  onSelect = output<void>();

  private currencyPipe: CurrencyPipe = inject(CurrencyPipe);

  get grandTotal(): string {
    const currency = this.flight().price.currency ?? 'XOF';
    return this.currencyPipe.transform(this.flight().price.grandTotal, currency.toUpperCase(), 'code', '1.0-0') ?? this.flight().price.grandTotal;
  }

  getAirlineName(carrierCode: string) {
    return this.airlines().find(s => s.iata.toUpperCase() === carrierCode.toUpperCase())?.name ?? carrierCode;
  }

  formatTime(endPoint: IFlightEndPoint) {
    return format(parseISO(endPoint.at), 'HH:mm');
  }

  formatFlightDuration(duration: string | undefined): string {
    if (duration === undefined) return '';
    const match = RegExp(/PT(?:(\d+)H)?(?:(\d+)M)?/).exec(duration);
    if (!match) return '';

    const hours = match[1] ? `${match[1]} h` : '';
    const minutes = match[2] ? `${match[2]} min` : '';
    return [hours, minutes].filter(Boolean).join(' ');
  }

  parseAirportInformation(endPoint: IFlightEndPoint) {
    const item = airports.find(s => s.iata === endPoint.iataCode);
    return item === undefined ? '' : `, ${item.city}`;
  }

  hasSuitcaseIncluded(segments: ISegment[]): number {
    const ids = segments.map(s => s.id);
    return Math.max(...this.flight().travelerPricings
      .flatMap(s => s?.fareDetailsBySegment)
      .filter(s => s && ids.includes(s.segmentId))
      .map(s => s?.includedCheckedBags?.quantity ?? 0));
  }

}
