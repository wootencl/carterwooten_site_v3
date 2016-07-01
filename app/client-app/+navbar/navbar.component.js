import { 
	Component,
  Output,
  EventEmitter } from '@angular/core';

import {
	Router,
  Routes,
  Route,
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavBar {
	@Output() mobileNavToggle = new EventEmitter();

	constructor() {
		// this.mobileHamburgerToggled = false;
	}
	toggleMobileNavEvent() {
		this.mobileNavToggle.emit();
		// this.toggleMobileNavBurger();
	}
	toggleMobileNavBurger() {
		$('#mobileNavHamburger').toggleClass('open');
	}

}