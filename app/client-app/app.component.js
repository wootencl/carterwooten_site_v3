import {
  Component,
  Input,
  Attribute,
  HostBinding,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate,
  ViewChild
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ROUTER_DIRECTIVES,
  NavigationEnd
} from '@angular/router';
import { Location } from '@angular/common';


import {NavBar} from './+navbar/index';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, NavBar],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('offScreenMenu', [
      state('inactive', style({
        opacity: 0,
        zIndex: -10
      })),
      state('active',   style({
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 10
      })),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})
export class App implements OnInit, OnDestroy {
  @ViewChild(NavBar) navBar = NavBar;
  @HostBinding('class.home') isHome = false;
  @HostBinding('class.notHome') isNotHome = false;
  @HostBinding('class.mobileNavOpen') mobileNavOpen = false;

  constructor(router: Router, route: ActivatedRoute) {
    this.router = router;
    this.state = 'inactive';
  }

  ngOnInit() {
    this.sub = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isHome = e.url === '/';
        this.isNotHome = !this.isHome;
      }
    });
  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }
  stateChange() {
    if (this.state === 'active') {
      this.mobileNavOpen = false;
      this.state = 'inactive';
      this.navBar.toggleMobileNavBurger();
    } else {
      this.mobileNavOpen = true;
      this.state = 'active';
      this.navBar.toggleMobileNavBurger();
    }
  }
}
