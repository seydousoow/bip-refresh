import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addSeconds, isAfter, subMinutes } from 'date-fns';
import { retry, switchMap, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FLIGHT_OFFER_PRICING, FLIGHT_OFFER_SEARCH, REQUEST_AMADEUS_TOKEN, SEATS_MAP } from '../core/utils/url.config';
import { IFlightOfferResponse } from '../model/amadeus/flight-offer.model';
import { AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET, AMADEUS_URL } from '../app.config';
import { IFlightOfferRequestModel, IRequestTokenResponse } from '../model/amadeus/flight-request.model';
import { IFlightOfferPriceRequest, IFlightOfferPriceResponse } from '../model/amadeus/flight-offer-price.model';
import { IFlightOfferSeatMappingRequest, ISeatMappingResponse } from '../model/amadeus/flight-seat-mapping.model';

@Injectable({
  providedIn: 'root'
})
export class AmadeusService {

  private readonly http: HttpClient = inject(HttpClient);

  public getFlights(data: IFlightOfferRequestModel): Observable<IFlightOfferResponse> {
    return this.checkAndRefreshToken().pipe(
      switchMap(() => this.http.get<IFlightOfferResponse>(this.computeUrl(FLIGHT_OFFER_SEARCH), { params: { ...data } }))
    );
  }

  public getFlightPricing(data: IFlightOfferPriceRequest): Observable<IFlightOfferPriceResponse> {
    return this.checkAndRefreshToken().pipe(
      switchMap(() => {
        const params = { include: 'credit-card-fees,bags,other-services,detailed-fare-rules' };
        return this.http.post<IFlightOfferPriceResponse>(this.computeUrl(FLIGHT_OFFER_PRICING), JSON.stringify(data), { params });
      })
    );
  }

  public getSeatMapping(data: IFlightOfferSeatMappingRequest): Observable<ISeatMappingResponse> {
    return this.checkAndRefreshToken().pipe(switchMap(() => {
      return this.http.post<ISeatMappingResponse>(this.computeUrl(SEATS_MAP), JSON.stringify(data));
    }));
  }

  /*
   public async createOrder(data: string): Promise<FlightCreateOrderResponseModel> {
   return this.http.post<FlightCreateOrderResponseModel>(this.url.flightCreateOrder, data).toPromise();
   }

   public async getOrder(id: string): Promise<FlightCreateOrderResponseModel> {
   return this.http.get<FlightCreateOrderResponseModel>(this.url.flightCreateOrder + '/' + id).toPromise();
   }

   public deleteOrder(id: string): Promise<void> {
   return this.http.delete(this.url.flightCreateOrder + '/' + id, {observe: 'response'})
   .pipe(retry(1), map(x => console.log('deleting amadeus order', x)))
   .toPromise();
   }*/
  private checkAndRefreshToken(): Observable<void> {
    if (!this.isTokenExpired()) {
      return of(undefined);
    }
    const body = new URLSearchParams();
    body.set('client_id', AMADEUS_CLIENT_ID);
    body.set('client_secret', AMADEUS_CLIENT_SECRET);
    body.set('grant_type', 'client_credentials');
    body.set('hostname', 'test');

    return this.http.post<IRequestTokenResponse>(this.computeUrl(REQUEST_AMADEUS_TOKEN), body.toString()).pipe(
      take(1),
      retry(1),
      switchMap(data => {
        sessionStorage.setItem('__ama_token__', data.access_token);
        sessionStorage.setItem('__ama_expiry__', String(data.expires_in ?? 60));
        sessionStorage.setItem('__ama_gen__', new Date().toString());
        return of(undefined);
      })
    );
  }

  private isTokenExpired(): boolean {
    const token = sessionStorage.getItem('__ama_token__');
    const expiry = sessionStorage.getItem('__ama_expiry__');
    const stored = sessionStorage.getItem('__ama_gen__');

    if (token === null || expiry === null || stored === null) {
      return true;
    }
    const gen = new Date(stored);
    const expiryDate = addSeconds(gen, Number(expiry));
    return isAfter(new Date(), subMinutes(expiryDate, 1));
  }

  private computeUrl(url: string): string {
    return AMADEUS_URL + url;
  }

}
