import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';
import { MessageService } from 'primeng/api';
import { HttpEvent, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REQUEST_AMADEUS_TOKEN } from './core/utils/url.config';
import { registerLocaleData } from '@angular/common';
import localeSn from '@angular/common/locales/fr-SN';
import { setDefaultOptions } from 'date-fns';
import { fr as frDateFnsLocale } from 'date-fns/locale';
import { translation } from './primeng.locale';

registerLocaleData(localeSn);

setDefaultOptions({ locale: frDateFnsLocale, weekStartsOn: 1 });

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'fr_SN' },
    provideHttpClient(withInterceptors([amadeusInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    MessageService,
    providePrimeNG({
      translation: translation,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'
          },
          ripple: true
        }
      }
    })
  ]
};

export const SEARCH_DATA = '__search__';
export const FLIGHT_OFFER = '__flight__offer__';
export const SELECTED_OFFER = '__selected__offer__';
export const DICTIONARIES = '__dictionaries__';
export const AMADEUS_URL = 'https://test.api.amadeus.com';
export const AMADEUS_CLIENT_ID = 'eygavHjzPPjkbMf5ywY3aFPAGnry02ZR';
export const AMADEUS_CLIENT_SECRET = 'kTjZePk9esJKIf2y';

export function amadeusInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.url.startsWith(AMADEUS_URL)) {
    const isAuthUrl = req.url.endsWith(REQUEST_AMADEUS_TOKEN);
    req = req.clone({ setHeaders: { 'Content-type': `application/${isAuthUrl ? 'x-www-form-urlencoded' : 'vnd.amadeus+json'}` } });

    const token = sessionStorage.getItem('__ama_token__') ?? '';
    if (!isAuthUrl && token.length > 0)
      req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  return next(req);
}
