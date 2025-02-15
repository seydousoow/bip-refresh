import { Component, input, InputSignal } from '@angular/core';
import { IDictionaries, IFlightEndPoint, IItinerary, ISegment } from '../../../../model/amadeus/flight-offer-price.model';
import { DatePipe, NgOptimizedImage, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { differenceInHours, differenceInMinutes, formatDate } from 'date-fns';
import { humanize } from '../../../../core/utils/utils';
import airports from '../../../../model/airports';
import airlines from '../../../../model/airlines';
import { DICTIONARIES } from '../../../../app.config';
import aircraft from '../../../../model/aircraft';

@Component({
  selector: '[bipFlightDetailsSummary]',
  templateUrl: './flight-details-summary.component.html',
  imports: [UpperCasePipe, TitleCasePipe, DatePipe, NgOptimizedImage]
})
export class FlightDetailsSummaryComponent {
  readonly itineraries: InputSignal<IItinerary[]> = input.required<IItinerary[]>();
  private readonly airports = airports;
  private readonly airlines = airlines;
  private readonly aircraft = aircraft;
  private readonly dictionaries = JSON.parse(sessionStorage.getItem(DICTIONARIES) ?? '{}') as IDictionaries;

  public terminale(point: IFlightEndPoint): string {
    const date = formatDate(point.at, 'EEEE dd/MM');
    const terminale = point.terminal && point.terminal.length > 0 ? `, Terminale ${point.terminal.toUpperCase()}` : '';
    return `${date}${terminale}`;
  }

  public airportLocation(iataCode: string): string {
    const item = this.airports.find((x) => x.iata.toUpperCase() === iataCode.toUpperCase());
    if (!item) return iataCode.toUpperCase();
    return item.airportName
      .replace(/airport/i, '')
      .replace(/international/i, '')
      .replace(/internationale/i, '')
      .replace('  ', ' ')
      .trim()
      .concat(`, ${humanize(item.state)}`);
  }

  public numberOfStops(segment: ISegment[]): string {
    const stops = segment.map((s) => s.numberOfStops).reduce((a, b) => a + b, 0);
    if (stops === 0) return 'Vol direct';
    return `${stops} escale${stops === 1 ? '' : 's'}`;
  }

  public airlineName(segment: ISegment): string {
    const name = this.airlines.find((x) => x.iata.toUpperCase() === segment.carrierCode.toUpperCase())?.name ?? '';
    const number = segment.carrierCode.concat(segment.number).toUpperCase();
    const result = name === '' ? number : `${name} (${number})`;
    if (segment.operating.carrierCode.toUpperCase() === segment.carrierCode.toUpperCase()) {
      return result;
    }
    const operatingCarrier = this.airlines.find((x) => x.iata.toUpperCase() === segment.operating.carrierCode.toUpperCase())?.name;
    return `${result} - Exploité par ${operatingCarrier ?? segment.operating.carrierCode}`;
  }

  public duration(start: string, end: string): string {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const hours = differenceInHours(date2, date1);
    const minutes = differenceInMinutes(date2, date1) % 60;

    if (hours === 0) {
      return `${minutes}min`;
    }
    if (minutes === 0) {
      return `${hours}h`;
    }

    return `${hours}h ${minutes}`;
  }

  public flightModel(iSegment: ISegment): string {
    const aircraft = this.aircraft.find((x) => x.description.toUpperCase().includes(iSegment.aircraft.code.toUpperCase()));
    if (aircraft) {
      return aircraft.description;
    }
    const decks = this.dictionaries?.aircraft;
    return decks ? decks[iSegment.aircraft.code] : iSegment.aircraft.code;
  }
}
