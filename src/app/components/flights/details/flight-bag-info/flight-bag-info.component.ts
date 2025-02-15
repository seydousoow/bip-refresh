import { AfterViewInit, Component, input, InputSignal, model, ModelSignal, signal, WritableSignal } from '@angular/core';
import { IAdditionalBag, IBags, IFlightOffer, IItinerary, ISegment, ITravelerPricing } from '../../../../model/amadeus/flight-offer-price.model';
import { TravelerTypeNarrative } from '../../../../model/amadeus/flight-offer.model';
import { TabsModule } from 'primeng/tabs';
import airports from '../../../../model/airports';
import { Card } from 'primeng/card';
import { CurrencyPipe } from '@angular/common';

interface ITraveler {
  id: string;
  type: string;
  label: string;
}

@Component({
  selector: 'bip-flight-bag-info, [bipFlightBagInfo]',
  imports: [TabsModule, Card, CurrencyPipe],
  templateUrl: './flight-bag-info.component.html'
})
export class FlightBagInfoComponent implements AfterViewInit {

  readonly flightOffers: InputSignal<IFlightOffer[]> = input.required<IFlightOffer[]>();
  readonly bagInclusion: InputSignal<Record<string, IBags>> = input<Record<string, IBags>>({});
  readonly currentTab: WritableSignal<string> = signal<string>('1');

  readonly selectedBagCount: ModelSignal<IAdditionalBag[]> = model.required<IAdditionalBag[]>();

  get travelers(): ITraveler[] {
    return this.flightOffers()[0].travelerPricings.map(s => ({ id: s.travelerId, type: s.travelerType, label: TravelerTypeNarrative(s.travelerType) }));
  }

  public ngAfterViewInit() {
    if (this.travelers.length > 0) {
      this.currentTab.set(this.travelers[0].id);
    }
  }

  public onTabChange(index: string): void {
    this.currentTab.update(() => this.travelers.find(t => t.id === index) ? index : '1');
  }

  public getCityName(iataCode: string): string {
    return airports.find(s => s.iata === iataCode)?.city ?? iataCode;
  }

  public getIncludedBagsForItinerary(travelerId: string, tp: ITravelerPricing[], segments: ISegment[]): string {
    const segmentIds = segments.map(s => s.id).filter(s => !!s);
    const bags = tp.filter(s => s.travelerId === travelerId)
      .flatMap(s => s.fareDetailsBySegment)
      .filter(s => segmentIds.includes(s.segmentId) && !!s.includedCheckedBags)
      .map(s => s.includedCheckedBags);
    const included = bags.length === 0 ? 0 : Math.max(...bags.map(s => s?.quantity ?? 0));
    if (included === 0) return "Sans Baggage";

    const unit = bags.map(s => s?.weight).filter(s => !!s);
    if (unit.length === 0) return `${included} pièce${included > 1 ? 's' : ''}`;

    return `${included} pièce${included > 1 ? 's' : ''} x ${unit[0]}${bags[0]?.weightUnit ?? 'kg'}`;
  }

  public canAddBags(id: string, itinerary: IItinerary): boolean {
    return this.hasFilteredBags(id, this.getSegmentIds(itinerary.segments));
  }

  public canAddAdditionalBags(id: string, offer: IFlightOffer): boolean {
    return this.hasFilteredBags(id, this.getSegmentIds(offer.itineraries.flatMap(itinerary => itinerary.segments)));
  }

  public getAdditionalBagsForItinerary(travelerId: string, segments: ISegment[]): IAdditionalBag[] {
    const segmentIds = this.getSegmentIds(segments);
    return Object
      .values(this.bagInclusion())
      .filter(bag => this.filteredBagsList(bag, travelerId, segmentIds))
      .toSorted((a, b) => a.quantity - b.quantity)
      .map((bag, index): IAdditionalBag => {
        const direction = segments.map(s => s.departure.iataCode + '_' + s.arrival.iataCode).join('-');
        return {
          price: bag.price,
          quantity: bag.quantity,
          segments: segments.map(s => s.id),
          travelerId,
          direction,
          identity: `${travelerId}_${bag.quantity}_${direction}_${index}`
        };
      });
  }

  public isSelected(bag: IAdditionalBag): boolean {
    return this.selectedBagCount().some(s => s.identity === bag.identity);
  }

  public selectBag(bag: IAdditionalBag): void {
    const index = this.selectedBagCount().findIndex(s => s.direction === bag.direction && s.travelerId === bag.travelerId && s.segments.every(segment => bag.segments.includes(segment)));
    const current = this.selectedBagCount()[index];
    if (index >= 0) {
      if (current.identity === bag.identity) {
        this.selectedBagCount.set(this.selectedBagCount().toSpliced(index, 1))
      } else {
        this.selectedBagCount.set(this.selectedBagCount().toSpliced(index, 1, bag));
      }
    } else {
      this.selectedBagCount.set([...this.selectedBagCount(), bag]);
    }
  }

  private getSegmentIds(segments: ISegment[]): string[] {
    return segments.map(s => s.id).filter(Boolean);
  }

  private hasFilteredBags(travelerId: string, segments: string[]): boolean {
    return Object.values(this.bagInclusion()).some(bag => this.filteredBagsList(bag, travelerId, segments));
  }

  private filteredBagsList(bag: IBags, travelerId: string, segments: string[]): boolean {
    return bag.name === 'CHECKED_BAG' && bag.travelerIds.includes(travelerId) && bag.segmentIds.some(segment => segments.includes(segment));
  }
}
