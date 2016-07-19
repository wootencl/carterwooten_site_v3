import {
  Component,
  Input,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
  animations: [
    trigger('fadeIn', [
    	state('inactive', style({opacity: 0})),
      state('active', style({opacity: 1})),
      transition('inactive => active', [
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class Site {
	@Input() title;
	@Input() imageUrl;
	@Input() description;
	@Input() url;
	@Input() delay;
	@Input() clickable;

	constructor() {
		this.state = 'inactive';
	}
	ngOnInit() {
		this.fadeInState();
	}
	fadeInState() {
		this.sleep(this.delay).then(() => {
			this.state = 'active';
		});
	}
	// ### HELPER ###
	sleep(time) {
	  return new Promise((resolve) => setTimeout(resolve, time));
	}
}