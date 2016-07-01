import { Component } from '@angular/core';
import { Footer } from '../+footer/index'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  directives: [Footer]
})
export class About {
}