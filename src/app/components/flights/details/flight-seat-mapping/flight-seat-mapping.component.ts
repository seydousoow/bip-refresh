import { AfterViewInit, Component, inject, input, model, ModelSignal, output, signal, WritableSignal } from '@angular/core';
import { IFlightOffer } from '../../../../model/amadeus/flight-offer-price.model';
import { AmadeusService } from '../../../../services/amadeus.service';
import { IAvailableSeatsCounter, ICoordinates, IDeck, IFacility, ISeat, ISeatMappingResponse, SeatSelectionModel, SegmentSelectionModel, TSeatAvailabilityStatus } from '../../../../model/amadeus/flight-seat-mapping.model';
import { TabsModule } from 'primeng/tabs';
import airports from '../../../../model/airports';
import { humanize } from '../../../../core/utils/utils';
import { TravelerTypeNarrative } from '../../../../model/amadeus/flight-offer.model';
import { CurrencyPipe, KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';
import { ObjectUtils } from 'primeng/utils';
import { Skeleton } from 'primeng/skeleton';
import { retry, take } from 'rxjs/operators';
import { Button } from 'primeng/button';

@Component({
  selector: '[bipFlightSeatMapping]',
  imports: [TabsModule, NgTemplateOutlet, Tooltip, Skeleton, CurrencyPipe, KeyValuePipe, Button],
  templateUrl: './flight-seat-mapping.component.html',
  styleUrl: './flight-seat-mapping.component.css'
})
export class FlightSeatMappingComponent implements AfterViewInit {
  readonly displaySeatMap: ModelSignal<boolean> = model.required<boolean>();
  readonly confirm = output<SeatSelectionModel[]>();
  readonly flightOffer = input.required<IFlightOffer>();

  readonly loading: WritableSignal<boolean> = signal<boolean>(true);
  readonly currentTab: WritableSignal<string> = signal<string>('1');
  readonly seatMap: WritableSignal<ISeatMappingResponse | undefined> = signal<ISeatMappingResponse | undefined>(undefined);

  readonly seatSelection: WritableSignal<SeatSelectionModel[]> = signal([], { equal: ObjectUtils.deepEquals });
  readonly hasSeatSelectionChanged: WritableSignal<boolean> = signal<boolean>(false);
  readonly facilities: WritableSignal<Record<string, string>> = signal<Record<string, string>>({});

  readonly legends: Record<string, { name: string, icon: string | undefined }> = {
    '': { name: 'Disponible', icon: undefined },
    'preferentialSeat': { name: 'Siège préférentiel', icon: 'pi pi-crown tw-text-xs' },
    'extraLegroom': { name: 'Espace supplémentaire', icon: 'pi pi-arrow-up-right-and-arrow-down-left-from-center tw-text-xs' },
    'chargeable': { name: 'Choix malin', icon: 'pi pi-tag tw-text-xs' },
    'occupied': { name: 'Indisponible', icon: 'pi pi-times tw-text-xs' }
  };

  private readonly narrative = TravelerTypeNarrative;
  private readonly amadeus: AmadeusService = inject(AmadeusService);

  get currentTraveler(): SeatSelectionModel | undefined {
    return this.seatSelection().find(s => s.active);
  }

  get selectedSeatPrice(): number {
    if (this.seatSelection().length === 0) {
      return 0;
    }
    return this.seatSelection().flatMap(s => s.selection).map(s => Number(s.price?.total ?? 0)).reduce((a, b) => a + b);
  }

  ngAfterViewInit() {
    if (this.flightOffer()) {
      this.getSeatMapping();
    }
  }

  public isSeatedCol(col: number): boolean {
    if (!this.currentTab()) {
      return false;
    }
    return this.seatMap()?.data
      .filter(s => s.segmentId === this.currentTab())
      .flatMap(s => s.decks)
      .flatMap(s => s.seats)
      .some(s => s.coordinates.y === col) ?? false;
  }

  public getSeatRowNumber(deck: IDeck, row: number): string {
    const facilityCount = deck.facilities?.filter(f => f.coordinates.x === row)?.length ?? 0;
    if (facilityCount === 0) {
      return deck.seats.find(s => s.coordinates.x === row)?.number?.replaceAll(/\D/g, '') ?? '';
    }
    return '';
  }

  public onTabChange(index: string): void {
    this.currentTab.update(() => this.seatMap()?.data.map((s) => s.segmentId)?.includes(index) ? index : this.seatMap()?.data[0].segmentId ?? '');
    this.seatSelection().forEach((selection, index) => selection.active = index === 0);
  }

  public getCityFromAirport(iataCode: string): string {
    const airport = airports.find((s) => s.iata?.toUpperCase() === iataCode.toUpperCase());
    return humanize(airport?.city ?? iataCode);
  }

  public getSelectionForTraveler(selection: SegmentSelectionModel[], segmentId: string) {
    return selection.find((s) => s.segmentId === segmentId)?.seatNumber ?? '--';
  }

  public buildDeckRange(size: number): number[] {
    return Array.from({ length: size }, (_, i) => i);
  }

  public getAvailabilityClassStatus(seats: ISeat[], row: number, col: number): TSeatAvailabilityStatus {
    return this.getSeat(seats, row, col)?.travelerPricing?.find(x => x.travelerId === this.currentTraveler?.travelerId)?.seatAvailabilityStatus ?? 'BLOCKED';
  }

  public getSeatPrice(seats: ISeat): number {
    return Number(seats.travelerPricing.find(x => x.travelerId === this.currentTraveler?.travelerId)?.price?.total ?? '0');
  }

  public getFacility(facilities: IFacility[] | undefined, coordinates: ICoordinates): IFacility | undefined {
    return facilities?.find(x => ObjectUtils.deepEquals(x.coordinates, coordinates));
  }

  public selectSeat(seat: ISeat, segment: string) {
    this.hasSeatSelectionChanged.set(true);
    this.seatSelection().flatMap(s => s.selection).filter(s => s.segmentId === segment).forEach(s => {
      if (s.seatNumber === seat.number) {
        s.seatNumber = undefined;
      }
    });
    const index = this.seatSelection().findIndex(s => s.active);
    if (index === -1) return;

    const selection = this.seatSelection()[index].selection.find(s => s.segmentId === segment);
    if (selection) {
      if (selection.seatNumber === seat.number) {
        selection.seatNumber = '';
        selection.price = undefined;
      } else {
        selection.seatNumber = seat.number;
        selection.price = seat.travelerPricing.find(s => s.travelerId === this.seatSelection()[index].travelerId)?.price;
      }
    }

    if (index < this.seatSelection().length - 1) {
      this.seatSelection()[index].active = false;
      this.seatSelection()[index + 1].active = true;
    }
  }

  public isSeatSelected(seatNumber: string, segmentId: string): boolean {
    return this.seatSelection().flatMap(s => s.selection).some(s => s.segmentId === segmentId && s.seatNumber === seatNumber);
  }

  public getSeat(seats: ISeat[], row: number, col: number): ISeat | undefined {
    return seats.find(x => x.coordinates.x === row && x.coordinates.y === col);
  }

  public switchSeatSelection(travelerId: string): void {
    this.seatSelection().forEach(s => s.active = s.travelerId === travelerId);
  }

  public facilityNarrative(code: string): string {
    return code === 'BK' ? 'Siège de cloison' : this.facilities()[code];
  }

  private getSeatMapping(): void {
    this.loading.set(true);
    this.amadeus.getSeatMapping({ data: [this.flightOffer()] }).pipe(take(1), retry({ count: 1, delay: 2000 })).subscribe({
      // @ts-ignore
      // of(JSON.parse(sessionStorage.getItem('seatMap')) as ISeatMappingResponse).pipe(take(1), retry({ count: 1, delay: 2000 })).subscribe({
      next: (response: ISeatMappingResponse) => {
        sessionStorage.setItem('seatMap', JSON.stringify(response));
        this.seatMap.set(response);
        this.loading.set(false);
        this.displaySeatMap.set(true);
        this.onTabChange(response.data[0].id);
        this.facilities.set(response.dictionaries.facilities ?? {});
        if (response.meta.count <= 10) {
          this.setClass(response.meta.count);
        }
        this.buildSeatSelection(response);
      }, error: (error: any) => {
        this.loading.set(false);
        this.seatMap.set(undefined);
        this.displaySeatMap.set(false);
        console.log(error);
      }
    });
  }

  private setClass(count: number) {
    setTimeout(() => {
      const selector = document.querySelector('div[role="tablist"].p-tablist-tab-list');
      if (selector !== null) {
        selector.classList.add('tw-grid', 'tw-grid-cols-'.concat(String(count)))
      }
    }, 10);
  }

  private buildSeatSelection(seatMap: ISeatMappingResponse): void {
    const counter: IAvailableSeatsCounter[] = seatMap.data.flatMap((s) => s.availableSeatsCounters).filter((s) => s !== undefined);
    const seats = this.flightOffer().travelerPricings
      .filter((s) => s.travelerType != 'HELD_INFANT' && counter.some((c) => c.travelerId === s.travelerId && (c.value > 0)))
      .map((traveler, idx): SeatSelectionModel => ({
        travelerId: traveler.travelerId,
        travelerType: traveler.travelerType,
        narrative: this.narrative(traveler.travelerType),
        active: idx === 0,
        selection: this.constructSelection(traveler.travelerId, seatMap)
      }))
      .toSorted((a, b) => a.travelerId.localeCompare(b.travelerId));
    this.seatSelection.set(seats);
  }

  private constructSelection(travelerId: string, seatMap: ISeatMappingResponse): SegmentSelectionModel[] {
    return seatMap.data.map((seatMap): SegmentSelectionModel => {
      const selection = this.flightOffer().travelerPricings
        .find((t) => t.travelerId === travelerId)
        ?.fareDetailsBySegment
        ?.find((f) => f.segmentId === seatMap.segmentId)
        ?.additionalServices?.chargeableSeatNumber;
      if (!selection) {
        return { segmentId: seatMap.segmentId }
      }
      const seat = seatMap.decks.flatMap((d) => d.seats).find((s) => s.number === selection);
      return { segmentId: seatMap.segmentId, seatNumber: seat?.number, price: seat?.travelerPricing.find(s => s.travelerId === travelerId)?.price };
    });
  }
}
