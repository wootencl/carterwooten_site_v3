import { 
	Component,
	trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
  host : {
    '[@routeAnimation]': 'true'
  },
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('kissState', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('250ms 500ms ease-in-out')
      ])
    ]),
    trigger('routeAnimation', [
      state('*', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('250ms 250ms ease-in')
      ]),
      transition('* => void', animate(250, style({opacity: 0})))
    ])
  ]
})
export class Home {
}