import { Component } from '@angular/core';

import {Greeter} from '../shared/index';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class Hello {
  constructor(greeter: Greeter) {
    this.message = greeter.say('hello', 'Angular2');
  }
}