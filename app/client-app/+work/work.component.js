import { 
	Component,
	trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Footer } from '../+footer/index';
import { Site } from '../+site/index'

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  directives: [Footer, Site],
  host : {
    '[@routeAnimation]': 'true'
  },
  animations: [
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
export class Work {
	constructor() {
		let delay = 800;
		let delayIncrement = 300;
		this.sites = [];
		// Time Sheet Web Application
		this.sites.push(
			{
				title: 'Timesheet Web Application',
				imageUrl: 'images/tsa.png',
				url: 'http://tsademo.carterwooten.com/',
				delay: delay,
				description: "One of my first web applications. It's purpose \
				is to simplify timekeeping for my client, Elevation Healthcare, \
				and their employees."
			});
		// CWSiteV2
		delay += delayIncrement;
		this.sites.push(
			{
				title: 'Personal Website Version 2',
				imageUrl: 'images/cwV2.png',
				url: 'http://cwv2.carterwooten.com/',
				delay: delay,
				description: "Most people like to hide their obsolete creations \
				, but I think this second iteration of my website serves as a great\
				example of how far I've come."
			});
		// Coming Soon
		delay += delayIncrement;
		this.sites.push(
			{
				title: 'Coming Soon',
				imageUrl: 'images/questions.jpg',
				delay: delay,
				description: "This third iteration of my personal website is a \
				stepping stone for a project I've been wanting to build for some time."
			});
		// Github
		delay += delayIncrement;
		this.sites.push(
			{
				title: 'Github Profile',
				imageUrl: 'images/github.png',
				url: 'https://github.com/wootencl',
				delay: delay,
				description: "Frontend development is my current passion but I have \
				experience in many different technologies. I believe my Github profile is a \
				good example of my breadth of work experience."
			});
	}
}