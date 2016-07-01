import { Component } from '@angular/core';

import {
	Router,
  Routes,
  Route,
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  directives: [ROUTER_DIRECTIVES]
})
export class Footer {
	constructor() {
	}
}