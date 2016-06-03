import {
  Component,
  Input,
  Attribute
} from '@angular/core';
import {
  Routes,
  Route,
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES
} from '@angular/router';

import {Greeter} from './shared/index';
import {Hello} from './+hello/index';
import {Ciao} from './+ciao/index';
import {Linker} from './+linker/index';

@Component({
  selector: 'hello-app',
  viewProviders: [Greeter],
  directives: [ROUTER_DIRECTIVES, Linker],
  template: `
    <ul>
      <li><a [routerLink]="['/']">Hello</a></li>
      <li><a [routerLink]="['/ciao', 'ng2']">Ciao</a></li>
    </ul>
    <router-outlet></router-outlet>
    <linker name="GitHub" url="https://github.com/shuhei/babel-angular2-app"></linker>
  `
})
@Routes([
  new Route({ path: '/', component: Hello }),
  new Route({ path: '/ciao/:name', component: Ciao })
])
export class HelloApp {
}
