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
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
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
export class Skill implements OnInit {
	@Input() skillName;
	@Input() iconUrl;
	@Input() description;
	@Input() delay;

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