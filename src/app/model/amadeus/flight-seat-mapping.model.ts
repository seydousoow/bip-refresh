import { IDictionaries, IFlightEndPoint, IFlightOffer, IPrice, TTravelerType } from './flight-offer-price.model';

export interface IAircraftCabinAmenities {
  beverage?: IAmenity & IAircraftCabinAmenitiesBeverage;
  entertainment?: IAmenity & IAircraftCabinAmenitiesEntertainment[];
  food?: IAmenity & IAircraftCabinAmenitiesFood;
  power?: IAmenity & IAircraftCabinAmenitiesPower;
  seat?: IAmenitySeat;
  wifi?: IAmenity & IAircraftCabinAmenitiesWifi;
}

export interface IAmenity {
  isChargeable?: boolean;
}

export type IAircraftCabinAmenitiesBeverage = {
  beverageType?: 'ALCOHOLIC' | 'NON_ALCOHOLIC' | 'ALCOHOLIC_AND_NON_ALCOHOLIC';
};

export type IAircraftCabinAmenitiesEntertainment = {
  entertainmentType?: 'LIVE_TV' | 'MOVIES' | 'AUDIO_VIDEO_ON_DEMAND' | 'TV_SHOWS' | 'IP_TV';
};

export type IAircraftCabinAmenitiesFood = {
  foodType?: 'MEAL' | 'FRESH_MEAL' | 'SNACK' | 'FRESH_SNACK';
};

export type IAircraftCabinAmenitiesPower = {
  powerType?: 'PLUG' | 'USB_PORT' | 'ADAPTOR' | 'PLUG_OR_USB_PORT';
  usbType?: 'USB_A' | 'USB_C' | 'USB_A_AND_USB_C';
};

export type IAircraftCabinAmenitiesWifi = {
  wifiCoverage?: 'FULL' | 'PARTIAL';
};

export interface IAmenityMedia {
  description?: IQualifiedFreeText;
  href?: string;
  mediaType?: 'application' | 'audio' | 'font' | 'example' | 'image' | 'message' | 'model' | 'multipart' | 'text' | 'video';
  title?: string;
}

export interface IAmenitySeat {
  amenityType?: 'SEAT';
  legSpace?: number;
  medias?: IAmenityMedia[];
  spaceUnit?: 'INCHES' | 'CENTIMENTERS';
  tilt?: 'FULL_FLAT' | 'ANGLE_FLAT' | 'NORMAL';
}

export interface IAvailableSeatsCounter {
  travelerId: string;
  value: number;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IDeck {
  deckConfiguration: IDeckConfiguration;
  deckType: 'UPPER' | 'MAIN' | 'LOWER';
  facilities?: IFacility[];
  seats: ISeat[];
}

export interface IDeckConfiguration {
  endSeatRow: number;
  endWingsRow: number;
  endWingsX: number;
  exitRowsX: number[];
  length: number;
  startSeatRow: number;
  startWingsRow: number;
  startWingsX: number;
  width: number;
}

export interface IFacility {
  code: string;
  column: string;
  coordinates: ICoordinates;
  position: 'FRONT' | 'REAR' | 'SEAT';
  row: string;
}

export interface IQualifiedFreeText {
  lang?: string;
  text?: string;
}

export interface ISeat {
  cabin: string;
  characteristicsCodes: string[];
  coordinates: ICoordinates;
  number: string;
  travelerPricing: ISeatMapTravelerPricing[];
}

export interface ISeatMap {
  aircraftCabinAmenities?: IAircraftCabinAmenities;
  arrival: IFlightEndPoint;
  availableSeatsCounters?: IAvailableSeatsCounter[];
  carrierCode: string;
  class: string;
  decks: IDeck[];
  departure: IFlightEndPoint;
  flightOfferId: string;
  id: string;
  number: string;
  segmentId: string;
  self: any;
  type: 'seatmap';
  aircraft: { code: string; };
  operating: {
    carrierCode: string;
    number?: string;
  };
}

export interface ISeatMapTravelerPricing {
  price: IPrice;
  seatAvailabilityStatus: TSeatAvailabilityStatus;
  travelerId: string;
}

export type TSeatAvailabilityStatus = 'AVAILABLE' | 'BLOCKED' | 'OCCUPIED';

export interface ITermAndCondition {
  category?: 'REFUND' | 'EXCHANGE' | 'REVALIDATION' | 'REISSUE' | 'REBOOK' | 'CANCELLATION';
  circumstances?: string;
  descriptions?: { descriptionType?: string; text?: string; }[];
  maxPenaltyAmount?: string;
  notApplicable?: boolean;
}

export interface ISeatMappingResponse {
  meta: { count: number };
  data: ISeatMap[];
  dictionaries: IDictionaries;
}

export interface IFlightOfferSeatMappingRequest {
  data: IFlightOffer[];
}

export interface SegmentSelectionModel {
  segmentId: string | number;
  seatNumber?: string;
  price?: IPrice;
}

export interface SeatSelectionModel {
  travelerId: string;
  travelerType: TTravelerType;
  narrative: string;
  active: boolean;
  selection: SegmentSelectionModel[];
}
