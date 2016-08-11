import { 
	Component,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
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