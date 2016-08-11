import 'babel-polyfill';
import 'zone.js/dist/zone';
import {provideRouter} from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module'
// import { App } from './app.component';
// import { APP_ROUTES } from './app.routes';

// bootstrap(App, [
// 	provideForms(),
//   provideRouter(APP_ROUTES),
//   HTTP_PROVIDERS
// ]).catch(err => console.error(err));


// if (ENV === 'production') {
//     enableProdMode();
// }


platformBrowserDynamic().bootstrapModule(AppModule);
