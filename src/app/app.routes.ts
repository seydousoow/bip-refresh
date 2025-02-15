import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/flights/listing/listing.component';
import { FlightDetailsComponent } from './components/flights/details/flight-details.component';

const flightRoutes: Routes = [
  { path: '', loadComponent: () => ListingComponent },
  { path: 'details', loadComponent: () => FlightDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', children: flightRoutes },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
