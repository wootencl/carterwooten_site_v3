import { 
	Component,
	trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('kissState', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('250ms ease-in-out')
      ]),
      transition('* => void', [
        animate('250ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class Home {
}