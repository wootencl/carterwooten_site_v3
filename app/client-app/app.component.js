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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Routes([
  new Route({ path: '/', component: Hello }),
  new Route({ path: '/ciao/:name', component: Ciao })
])
export class HelloApp {
}
