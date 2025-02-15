import { Component, model, ModelSignal } from '@angular/core';
import { IAirportModel } from '../../model/airports';

@Component({
  selector: 'bip-airport-selection-item',
  template: `
    <div class="tw-mr-2 tw-min-w-10 tw-h-6 tw-flex tw-justify-center tw-items-center tw-text-white tw-bg-orange-500 tw-rounded tw-font-bold">
      {{ airport().iata }}
    </div>
    <div class="tw-flex-1">
      <div>{{ airport().airportName }}</div>
      <div class="tw-truncate">{{ airport().city }}, {{ airport().countryName }}</div>
    </div>
  `,
  styles: [`
      :host {
          @apply tw-w-full tw-flex tw-justify-between tw-items-center tw-cursor-pointer tw-py-1 tw-border-b-neutral-300 tw-text-gray-950 tw-text-xs hover:tw-bg-orange-100;
      }
  `]
})
export class AirportSelectionItemComponent {
  readonly airport: ModelSignal<IAirportModel> = model.required<IAirportModel>();
}
