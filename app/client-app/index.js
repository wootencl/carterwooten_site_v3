import 'babel-polyfill';
import 'zone.js/dist/zone';
import {provideRouter} from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
//import {ROUTER_PROVIDERS} from '@angular/router';

import {App} from './app.component';
import { APP_ROUTES } from './app.routes'

bootstrap(App, [
	disableDeprecatedForms(),
	provideForms(),
  provideRouter(APP_ROUTES),
  HTTP_PROVIDERS
]).catch(err => console.error(err));
