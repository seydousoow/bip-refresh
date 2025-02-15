import { TTravelClass } from './amadeus/flight-offer-price.model';

export type IFlightSearchModel = {
  oneWay: boolean;
  nonStop: boolean;
  adults: number;
  children: number;
  infants: number;
  travelClass: TTravelClass;
  ccy: string;
  departure: string | null;
  destination: string | null;
  departureDate: Date;
  returnDate?: Date | null;
}

export type TClassEconomy = 'Y' | 'B' | 'H' | 'K' | 'L' | 'G' | 'V' | 'S' | 'N' | 'Q' | 'O';

export type TClassPremium_Economy = 'W' | 'P';

export type TClassBusiness = 'J' | 'C' | 'R' | 'D' | 'I';

export type TClassFirst = 'F' | 'A';
