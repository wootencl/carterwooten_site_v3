import { Component } from '@angular/core';
import { Footer } from '../+footer/index';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  directives: [Footer]
})
export class Contact {
}