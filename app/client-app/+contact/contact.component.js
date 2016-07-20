import { Component } from '@angular/core';
import { Footer } from '../+footer/index';
import { ContactMessage } from './contact_message.js';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  directives: [Footer]
})
export class Contact {
}