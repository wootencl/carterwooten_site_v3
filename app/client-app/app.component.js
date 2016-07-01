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


import {Greeter} from './shared/index';
import {NavBar} from './+navbar/index';

@Component({
  selector: 'app',
  viewProviders: [Greeter],
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

  constructor(router: Router, route: ActivatedRoute) {
    this.router = router;
    this.state = 'inactive';
  }

  ngOnInit() {
    this.sub = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isHome = e.url === '/';
      }
    });
  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }
  stateChange() {
    // this.state = (this.state === 'active' ? 'inactive' : 'active');
    if (this.state === 'active') {
      this.state = 'inactive';
      this.navBar.toggleMobileNavBurger();
    } else {
      this.state = 'active';
      this.navBar.toggleMobileNavBurger();
    }
  }
}
