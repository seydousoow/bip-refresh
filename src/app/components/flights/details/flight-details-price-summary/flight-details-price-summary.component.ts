import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { IFlightOfferPriceResponse, TTravelerType } from '../../../../model/amadeus/flight-offer-price.model';
import { CurrencyPipe } from '@angular/common';
import airports from '../../../../model/airports';

const adults: TTravelerType[] = ['ADULT', 'SENIOR', 'STUDENT'];
const infants: TTravelerType[] = ['HELD_INFANT', 'SEATED_INFANT'];
const children: TTravelerType[] = ['CHILD', 'YOUNG'];

@Component({
  selector: '[bipFlightDetailsPriceSummary]',
  imports: [CurrencyPipe],
  templateUrl: './flight-details-price-summary.component.html'
})
export class FlightDetailsPriceSummaryComponent {
  readonly bags: InputSignal<{ quantity: number, price: number }> = input.required<{ quantity: number, price: number }>();
  readonly bipFees: InputSignal<number> = input.required<number>();
  readonly flightOffers: InputSignal<IFlightOfferPriceResponse> = input.required<IFlightOfferPriceResponse>();

  readonly iata: Signal<string> = computed(() => {
    const offer = this.flightOffers().data.flightOffers[0];
    const iti = offer.itineraries[offer.itineraries.length - 1];
    return iti.segments[iti.segments.length - 1].arrival.iataCode;
  });

  readonly cityCode: Signal<string> = computed(() => {
    const locations = this.flightOffers().dictionaries.locations;
    if (locations === undefined) {
      return this.iata();
    }
    return locations[this.iata()]?.cityCode ?? this.iata();
  });

  readonly flightPrice: Signal<number> = computed(() => {
    const offer = this.flightOffers().data.flightOffers.flatMap(s => s.price.grandTotal ?? '0').map(Number.parseFloat).reduce((a, b) => a + b, 0);
    return offer + (this.bags().price ?? 0);
  });

  readonly totalFlightPrice: Signal<number> = computed(() => this.bipFees() + this.flightPrice());

  readonly destination: Signal<string | undefined> = computed(() => airports.find(s => s.iata === this.iata())?.city ?? this.iata());

  get passengers(): string [] {
    if (!this.flightOffers().data.flightOffers.length) {
      return [];
    }
    const ps = this.flightOffers().data.flightOffers[0].travelerPricings.map(tp => tp.travelerType);

    const adu: number = ps.filter(p => adults.includes(p)).length;
    const cha: number = ps.filter(p => children.includes(p)).length;
    const inf: number = ps.filter(p => infants.includes(p)).length;
    const result = [`${adu} adulte${adu > 1 ? 's' : ''}`];
    if (cha > 0) {
      result.push(`${cha} enfant${cha > 1 ? 's' : ''}`);
    }
    if (inf > 0) {
      result.push(`${inf} bébé${inf > 1 ? 's' : ''}`);
    }
    return result;
  }
}
