export type TTravelClass = 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';

export type ITravelerPricingFareOption =
  | "STANDARD"
  | "INCLUSIVE_TOUR"
  | "SPANISH_MELILLA_RESIDENT"
  | "SPANISH_CEUTA_RESIDENT"
  | "SPANISH_CANARY_RESIDENT"
  | "SPANISH_BALEARIC_RESIDENT"
  | "AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS"
  | "AIR_FRANCE_DOM_DISCOUNT_PASS"
  | "AIR_FRANCE_COMBINED_DISCOUNT_PASS"
  | "AIR_FRANCE_FAMILY"
  | "ADULT_WITH_COMPANION"
  | "COMPANION";

export type TTravelerType =
  | 'ADULT'
  | 'CHILD'
  | 'SENIOR'
  | 'YOUNG'
  | 'HELD_INFANT'
  | 'SEATED_INFANT'
  | 'STUDENT';

export type IPricingOptionsFareType = "PUBLISHED" | "NEGOTIATED" | "CORPORATE";

export type TServiceType = 'CHECKED_BAGS' | 'MEALS' | 'SEATS' | 'OTHER_SERVICES';

export type TServiceName = 'PRIORITY_BOARDING' | 'AIRPORT_CHECKIN';

export type TGender = 'MALE' | 'FEMALE';

export type TDocumentType = 'VISA' | 'PASSPORT' | 'IDENTITY_CARD' | 'KNOWN_TRAVELER' | 'REDRESS';

export type TPhoneType = 'MOBILE' | 'LANDLINE' | 'FAX';

export interface IDocumentModel {
  type: TDocumentType;
  number: string;
  issuanceDate: Date;
  expiryDate: Date;
  issuanceCountry: string; // ISO 3166-1 alpha-2
  issuanceLocation: string;
  nationality: string; // ISO 3166-1 alpha-2
  birthPlace: string;
}

export interface IContactModel {
  emailAddress: string;
  name?: INameModel;
  address?: IAddressModel;
  purpose?: string; // the purpose for which this contact is to be used [ STANDARD, INVOICE, STANDARD_WITHOUT_TRANSMISSION ]
  phones: Array<IPhoneModel>; // max 3
  companyName?: string;
}

export interface IAddressModel {
  category?: "BUSINESS" | "PERSONAL" | "OTHER";
  lines: string[]; // Line 1 = Street address, Line 2 = Apartment, suite, unit, building, floor, etc
  postalCode: string;
  countryCode: string; // country code ISO 3166-1 country code [a-zA-Z]{2}
  cityName: string; // [a-zA-Z -]{1,35} Full city name. Example: Dublin
  stateName: string; // Full state name
  postalBox: string;
}

// Main interfaces
export interface IFlightOfferPriceRequest {
  data: {
    type: 'flight-offers-pricing';
    flightOffers: IFlightOffer[];
  };
}

export interface IFlightOfferPriceResponse {
  data: IFlightOfferPricingOut;
  dictionaries: IDictionaries;
  included?: {
    'credit-card-fees'?: Record<string, ICreditCardFee>;
    'bags'?: Record<string, IBags>;
    'other-services'?: Record<string, IOtherServices>;
    'detailed-fare-rules'?: Record<string, IDetailedFareRules>;
  };
}

export interface IFlightOfferPricingOut {
  type: 'flight-offers-pricing';
  flightOffers: IFlightOffer[];
  bookingRequirements?: IBookingRequirements;
}

export interface IFlightOffer {
  type: 'flight-offer';
  id: string;
  source: 'GDS';
  instantTicketingRequired: boolean;
  disablePricing?: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  paymentCardRequired?: boolean;
  lastTicketingDate?: string;
  lastTicketingDateTime?: string;
  numberOfBookableSeats: number;
  itineraries: IItinerary[];
  price: IPrice;
  pricingOptions?: IPricingOptions;
  validatingAirlineCodes: string[];
  travelerPricings: ITravelerPricing[];
  fareRules?: IFareRules;
}

export interface IFareRules {
  currency?: string;
  rules?: ITermAndCondition[];
}

export interface IItinerary {
  duration?: string;
  segments: ISegment[];
}

export interface ISegment {
  departure: IFlightEndPoint;
  arrival: IFlightEndPoint;
  carrierCode: string;
  number: string;
  aircraft: { code: string; };
  operating: { carrierCode: string; };
  duration: string;
  id: string;
  numberOfStops: number;
  blacklistedInEU: boolean;
  co2Emissions?: ICo2Emission[];
}

export interface IFlightEndPoint {
  iataCode: string;
  terminal?: string;
  at: string;
}

export interface ICo2Emission {
  weight: number;
  weightUnit: string;
  cabin: TTravelClass;
}

export interface IPrice {
  currency: string;
  total: string;
  base: string;
  fees: IFee[];
  grandTotal: string;
  billingCurrency?: string;
  taxes?: ITax[];
  refundableTaxes?: string;
  additionalServices?: IAdditionalService[];
  margin?: string;
}

export interface IFee {
  amount: string;
  type: 'TICKETING' | 'FORM_OF_PAYMENT' | 'SUPPLIER';
}

export interface ITax {
  amount: string;
  code: string;
}

export interface IAdditionalService {
  amount: string;
  type: TServiceType;
}

export interface IPricingOptions {
  fareType: IPricingOptionsFareType[];
  includedCheckedBagsOnly: boolean;
  refundableFare?: boolean;
  noRestrictionFare?: boolean;
  noPenaltyFare?: boolean;
  corporateCodes?: string[];
}

export interface ITravelerPricing {
  travelerId: string;
  fareOption: ITravelerPricingFareOption;
  travelerType: TTravelerType;
  associatedAdultId?: string; // if type="HELD_INFANT", corresponds to the adult traveler's id who will share the seat
  price: IPrice;
  fareDetailsBySegment: IFareDetailsBySegment[];
}

export interface IFareDetailsBySegment {
  segmentId: string;
  cabin: TTravelClass;
  fareBasis: string;
  brandedFare?: string;
  class: string;
  includedCheckedBags?: IBaggageAllowance;
  additionalServices?: IAdditionalServicesRequest;
}

export interface IBaggageAllowance {
  quantity: number;
  weight?: number;
  weightUnit?: string;
}

export interface IAdditionalServicesRequest {
  chargeableCheckedBags?: IChargeableCheckedBags;
  chargeableSeat?: IChargeableSeat;
  chargeableSeatNumber?: string;
  otherServices?: TServiceName[];
}

export interface IChargeableCheckedBags extends IBaggageAllowance {
  id: string;
}

export interface IChargeableSeat {
  id: string;
  number: string;
}

export interface ICreditCardFee {
  brand: string;
  amount: string;
  currency: string;
  flightOfferId: string;
}

export interface IBags extends IBaggageAllowance {
  name: string;
  price: IElementaryPrice;
  bookableByItinerary: boolean;
  segmentIds: string[];
  travelerIds: string[];
}

export type IAdditionalBag = Pick<IBags, 'price'> & IBaggageAllowance & {
  travelerId: string;
  direction: string;
  identity: string;
  segments: string[];
}

export interface IOtherServices {
  name: TServiceName;
  price: IElementaryPrice;
  bookableByTraveler: boolean;
  bookableByItinerary: boolean;
  segmentIds: string[];
  travelerIds: string[];
}

export interface IElementaryPrice {
  amount: number;
  currencyCode: string;
}

export interface IDetailedFareRules {
  fareBasis: string;
  name?: string;
  fareNotes?: ITermAndCondition;
  segmentId: string;
}

export interface ITermAndCondition {
  category?: 'REFUND' | 'EXCHANGE' | 'REVALIDATION' | 'REISSUE' | 'REBOOK' | 'CANCELLATION';
  circumstances?: string;
  notApplicable?: boolean;
  maxPenaltyAmount?: string;
  descriptions?: IDescription[];
}

export interface IDescription {
  descriptionType: string;
  text: string;
}

export interface IBookingRequirements {
  invoiceAddressRequired?: boolean;
  mailingAddressRequired?: boolean;
  emailAddressRequired?: boolean;
  phoneCountryCodeRequired?: boolean;
  mobilePhoneNumberRequired?: boolean;
  phoneNumberRequired?: boolean;
  postalCodeRequired?: boolean;
  travelerRequirements?: ITravelerRequirement[];
}

export interface ITravelerRequirement {
  travelerId: string;
  genderRequired?: boolean;
  documentRequired?: boolean;
  documentIssuanceCityRequired?: boolean;
  dateOfBirthRequired?: boolean;
  redressRequiredIfAny?: boolean;
  airFranceDiscountRequired?: boolean;
  spanishResidentDiscountRequired?: boolean;
  residenceRequired?: boolean;
}

export interface IDictionaries {
  locations?: Record<string, ILocationValue>;
  aircraft?: Record<string, string>;
  currencies?: Record<string, string>;
  carriers?: Record<string, string>;

  facilities?: Record<string, string>;
  seatCharacteristics?: Record<string, string>;
}

export interface ILocationValue {
  cityCode: string;
  countryCode: string;
}

export interface IPhoneModel {
  deviceType: TPhoneType;
  countryCallingCode: string; // [0-9+]{2,5} Country calling code of the phone number, as defined by the International Communication Union.
  // Examples - "1" for US, "371" for Latvia.
  number: string; // pattern: [0-9]{1,15} Phone number. Composed of digits only. The number of digits depends on the country.
}

export interface INameModel {
  firstName: string;
  middleName?: string;
  lastName: string;
}
