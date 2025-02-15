export interface IFlightOfferRequestModel {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate?: string;
  nonStop: boolean;
  currencyCode: string;
  adults: string | number;
  children: string | number;
  infants: string | number;
  travelClass: string;
  max?: number;
  maxPrice?: number;
  includedAirlineCodes?: string;
  excludedAirlineCodes?: string;
}

export interface IRequestTokenResponse {
  access_token: string;
  expires_in: number;
}
