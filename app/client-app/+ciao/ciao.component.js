import { Component } from '@angular/core';

import {Greeter} from '../shared/index';

@Component({
  selector: 'ciao',
  templateUrl: './ciao.component.html'
})
export class Ciao {
  constructor(greeter: Greeter) {
    this.greeter = greeter;
  }

  routerOnActivate(curr, prev, currTree, prevTree) {
    this.message = this.greeter.say('ciao', curr.getParam('name'));
  }
}