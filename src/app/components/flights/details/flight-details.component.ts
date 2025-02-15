import { Component, computed, inject, Signal, signal, viewChild, WritableSignal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { retry } from 'rxjs/operators';
import { AmadeusService } from '../../../services/amadeus.service';
import { FLIGHT_OFFER, SELECTED_OFFER } from '../../../app.config';
import { IAdditionalBag, IBags, IFlightOffer, IFlightOfferPriceRequest, IFlightOfferPriceResponse, IItinerary, ITravelerRequirement, TDocumentType, TGender, TServiceType, TTravelerType } from '../../../model/amadeus/flight-offer-price.model';
import { FlightDetailsSummaryComponent } from './flight-details-summary/flight-details-summary.component';
import { AfricanCountryCodes } from '../../../model/african-country-codes';
import { FlightDetailsContactComponent } from './flight-details-contact/flight-details-contact.component';
import { DetailsTravelerComponent } from './flight-details-traveler/details-traveler.component';
import { Skeleton } from 'primeng/skeleton';
import { Button } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { FlightSeatMappingComponent } from './flight-seat-mapping/flight-seat-mapping.component';
import { SeatSelectionModel } from '../../../model/amadeus/flight-seat-mapping.model';
import { FlightBagInfoComponent } from './flight-bag-info/flight-bag-info.component';
import { FlightDetailsPriceSummaryComponent } from './flight-details-price-summary/flight-details-price-summary.component';

type TPriceModel = { travelerType: TTravelerType, amount: number, price: number };

export interface IFlightTravelerForm {
  travelerType: FormControl<TTravelerType>;
  travelerId: FormControl<string | number>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  gender?: FormControl<TGender>;
  dateOfBirth?: FormControl<Date | null>;
  issuanceCity?: FormControl<string>;
  document?: FormGroup<IDocumentTravelerForm>;
}

export interface IDocumentTravelerForm {
  documentType: FormControl<TDocumentType>;
  number: FormControl<string>;
  issuanceDate: FormControl<Date | null>;
  expiryDate: FormControl<Date | null>;
  issuanceCountry: FormControl<string>;
  issuanceLocation: FormControl<string>;
  nationality: FormControl<string>;
  birthPlace: FormControl<string>;
  holder: FormControl<boolean>;
}

@Component({
  selector: 'bip-flight-details',
  imports: [Skeleton, FlightDetailsSummaryComponent, FlightDetailsContactComponent, ReactiveFormsModule, DetailsTravelerComponent, Button, FlightSeatMappingComponent, FlightBagInfoComponent, FlightDetailsPriceSummaryComponent],
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {

  readonly loading: WritableSignal<boolean> = signal(true);
  readonly prices: WritableSignal<TPriceModel[]> = signal([]);
  readonly bipFees = signal(10_000);
  readonly displaySeatMap: WritableSignal<boolean> = signal(true);
  readonly travelerFormGroup: WritableSignal<FormGroup> = signal<FormGroup>(new FormGroup({}));
  readonly additionalServices: Map<TServiceType, number> = new Map<TServiceType, number>();
  readonly selectedBagCount: WritableSignal<IAdditionalBag[]> = signal<IAdditionalBag[]>([]);
  readonly bagComputations: Signal<{ quantity: number, price: number }> = computed(() => ({
    quantity: this.selectedBagCount().map(s => s.quantity).reduce((a, b) => a + b, 0),
    price: this.selectedBagCount().map(s => parseFloat(String(s.price.amount ?? '0'))).reduce((a, b) => a + b, 0)
  }));
  protected readonly travelers: FormArray<FormGroup<IFlightTravelerForm>> = new FormArray<FormGroup<IFlightTravelerForm>>([]);
  protected flightOfferPricing!: IFlightOfferPriceResponse;

  private readonly router: Router = inject(Router);
  private readonly amadeus: AmadeusService = inject(AmadeusService);
  private readonly messageServie: MessageService = inject(MessageService);

  private readonly africanCountryCodes: ReadonlyArray<string> = AfricanCountryCodes;
  private readonly travelerRequirements: WritableSignal<ReadonlyArray<ITravelerRequirement>> = signal<ITravelerRequirement[]>([]);

  private readonly selectedOffer!: IFlightOffer;
  private contactChild = viewChild(FlightDetailsContactComponent);
  private contactComponent = computed(() => this.contactChild()?.contactForm);

  constructor() {
    const offer = sessionStorage.getItem(FLIGHT_OFFER);
    if (offer === null) {
      this.noOfferFound();
    } else {
      this.selectedOffer = JSON.parse(offer) as IFlightOffer;
      if (this.selectedOffer === null || this.selectedOffer === undefined) {
        this.noOfferFound();
      } else {
        this.loading.set(true);
        this.getFlightOfferPrice();
      }
    }
  }

  get flightOffers(): IFlightOffer[] {
    return this.flightOfferPricing?.data?.flightOffers ?? [];
  }

  get bags(): Record<string, IBags> {
    return this.flightOfferPricing?.included?.bags ?? {};
  }

  get formsValid(): boolean {
    return (this.travelerFormGroup()?.valid ?? false) && (this.contactComponent()?.valid ?? false);
  }

  get returnDate(): Date {
    if (!this.flightOfferPricing) {
      return new Date();
    }
    const segments = this.flightOfferPricing.data.flightOffers[this.flightOfferPricing.data.flightOffers.length - 1].itineraries[0].segments;
    return new Date(segments[segments.length - 1].arrival.at)
  }

  get itineraries(): IItinerary[] {
    return this.flightOfferPricing?.data?.flightOffers?.flatMap(s => s.itineraries) ?? [];
  }

  public continueBooking() {
    this.travelerFormGroup()?.markAllAsTouched();
    this.contactComponent()?.markAllAsTouched();
    if (!this.formsValid) {
      this.messageServie.add({ severity: 'error', summary: 'Erreur', detail: 'Veuillez vérifier les informations saisies', life: 3500 });
      return;
    }
    console.log({ ...this.travelerFormGroup()?.value, ...this.contactComponent()?.value });
  }

  public updateSeatPricing(seats: SeatSelectionModel[]): void {
    this.selectedOffer.travelerPricings.forEach(traveler => {
      const selection = seats.find(s => s.travelerId === traveler.travelerId);
      if (!selection) {
        return;
      }
      traveler.fareDetailsBySegment = traveler.fareDetailsBySegment ?? [];
      traveler.fareDetailsBySegment.forEach(segment => {
        const seatNumber = selection.selection.find(s => s.segmentId === segment.segmentId)?.seatNumber;
        segment.additionalServices = { ...segment.additionalServices, chargeableSeatNumber: seatNumber };
      });
    });
    sessionStorage.setItem(FLIGHT_OFFER, JSON.stringify(this.selectedOffer));
    this.getFlightOfferPrice(true);
  }

  private noOfferFound(): void {
    this.loading.set(false);
    void this.router.navigate(['/flights']);
  }

  private getFlightOfferPrice(refresh: boolean = false): void {
    const data: IFlightOfferPriceRequest = { data: { type: 'flight-offers-pricing', flightOffers: [this.selectedOffer] } };
    this.amadeus.getFlightPricing(data).pipe(take(1), retry({ delay: 1500, count: 1 })).subscribe({
      // @ts-ignore
      // of(JSON.parse(sessionStorage.getItem(SELECTED_OFFER)) as IFlightOfferPriceResponse).pipe(take(1), retry({ delay: 1500, count: 1 })).subscribe({
      next: data => {
        sessionStorage.setItem(SELECTED_OFFER, JSON.stringify(data));
        this.flightOfferPricing = data;
        this.travelerRequirements.set(this.flightOfferPricing.data.bookingRequirements?.travelerRequirements ?? []);
        if (!refresh) {
          this.initTravelers();
        }
        (['CHECKED_BAGS', 'SEATS'] as TServiceType[]).forEach(s => this.configureAdditionalService(s));
        this.configurePrices();
        console.log(data);
        this.loading.set(false);
      }, error: error => {
        console.log(error);
        this.noOfferFound();
      }
    });
  }

  private configureAdditionalService(service: TServiceType): void {
    this.additionalServices.clear();
    const price = this.flightOfferPricing.data.flightOffers.map(x => x.price)
      .flatMap(x => x?.additionalServices ?? [])
      .filter(x => !!x.type && x.type === service)
      .map(x => Number.parseFloat(x.amount ?? 0))
      .reduce((a, b) => a + b, 0);
    this.additionalServices.set(service, price);
  }

  private configurePrices(): void {
    const arr: TPriceModel[] = [];
    this.flightOfferPricing.data.flightOffers[0].travelerPricings.forEach(pricing => {
      const travelerType = pricing.travelerType;
      const current = arr.find(s => s.travelerType === travelerType);
      const amount = current ? current.amount + 1 : 1;
      arr.push({ travelerType, amount, price: amount * parseFloat(pricing.price.total) });
    });
    this.prices.set(arr);
    this.setBipFees();
  }

  private setBipFees(): void {
    const iata: string[] = [...new Set<string>(...this.flightOfferPricing.data.flightOffers[0].itineraries
      .flatMap(s => s.segments).flatMap(s => [s.departure.iataCode.toUpperCase(), s.arrival.iataCode.toUpperCase()]))];
    if (iata.every(s => s === 'SN')) this.bipFees.set(10_000);
    else if (iata.some(s => !this.africanCountryCodes.includes(s))) this.bipFees.set(30_000);
    else this.bipFees.set(15_000);
  }

  private initTravelers() {
    this.flightOfferPricing.data.flightOffers.flatMap(offer => offer.travelerPricings).forEach(traveler => {
      const group: FormGroup<IFlightTravelerForm> = new FormGroup<IFlightTravelerForm>({
        travelerType: new FormControl({ value: traveler.travelerType, disabled: true }, { nonNullable: true, validators: [Validators.required] }),
        travelerId: new FormControl({ value: traveler.travelerId, disabled: true }, { nonNullable: true, validators: [Validators.required] }),
        firstName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
        lastName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] })
      });

      if (this.getTravelerRequirements(traveler.travelerId)?.dateOfBirthRequired) {
        group.addControl('dateOfBirth', new FormControl<Date | null>(null, { nonNullable: true, validators: [Validators.required] }));
      }
      if (this.getTravelerRequirements(traveler.travelerId)?.genderRequired) {
        group.addControl('gender', new FormControl<TGender>('MALE', { nonNullable: true, validators: [Validators.required] }));
      }
      if (this.getTravelerRequirements(traveler.travelerId)?.documentIssuanceCityRequired) {
        group.addControl('issuanceCity', new FormControl('', { nonNullable: true, validators: [Validators.required] }));
      }
      if (this.getTravelerRequirements(traveler.travelerId)?.documentRequired) {
        group.addControl('document', this.buildEmptyDocumentFormGroup(traveler.associatedAdultId));
      }

      this.travelers.push(group);
    });
    this.travelerFormGroup().addControl('travelers', this.travelers);
  }

  private getTravelerRequirements(travelerId: string | number): ITravelerRequirement | undefined {
    const id = typeof travelerId === 'string' ? parseInt(travelerId) : travelerId;
    return this.travelerRequirements().find(x => parseInt(x.travelerId) === id);
  }

  private buildEmptyDocumentFormGroup(association: string | number | null | undefined): FormGroup<IDocumentTravelerForm> {
    const isHolder = association === null || association === undefined;
    return new FormGroup<IDocumentTravelerForm>({
      number: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      holder: new FormControl({ value: isHolder, disabled: true }, { nonNullable: true }),
      issuanceDate: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      expiryDate: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      issuanceCountry: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Z]{2}$/)] }),
      issuanceLocation: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      documentType: new FormControl<TDocumentType>('PASSPORT', { nonNullable: true, validators: [Validators.required] }),
      birthPlace: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      nationality: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Z]{2}$/)] })
    });
  }
}
