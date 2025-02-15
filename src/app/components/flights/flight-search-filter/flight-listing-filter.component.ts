import { Component, input, InputSignal } from '@angular/core';
import { DecimalPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Panel } from 'primeng/panel';
import { RadioButton } from 'primeng/radiobutton';
import { Slider } from 'primeng/slider';
import { FilterFormGroup } from '../listing/listing.component';
import { TAirline } from '../../../model/airlines';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'bip-flight-listing-filter',
  imports: [DecimalPipe, FormsModule, Panel, RadioButton, Slider, TitleCasePipe, UpperCasePipe, ReactiveFormsModule],
  templateUrl: './flight-listing-filter.component.html'
})
export class FlightListingFilterComponent {

  readonly maxRangePrice: InputSignal<number> = input.required<number>();
  readonly filterFormGroup: InputSignal<FormGroup<FilterFormGroup>> = input.required<FormGroup<FilterFormGroup>>();
  readonly airlines: InputSignal<TAirline[]> = input.required<TAirline[]>();
  readonly airlinesSelection: InputSignal<SelectionModel<string>> = input.required<SelectionModel<string>>();

}
