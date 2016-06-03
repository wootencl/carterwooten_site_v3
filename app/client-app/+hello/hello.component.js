import { Component } from '@angular/core';

import {Greeter} from '../shared/index';

@Component({
  selector: 'hello',
  template: '<p>{{ message }}</p>'
})
export class Hello {
  constructor(greeter: Greeter) {
    this.message = greeter.say('hello', 'Angular2');
  }
}