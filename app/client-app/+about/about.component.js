import { 
	Component,
	trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Footer } from '../+footer/index';
import { Skill } from '../+skill/index';

@Component({
	host : {
    '[@routeAnimation]': 'true'
  },
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  directives: [Footer, Skill],
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
export class About {
	constructor() {
		let delay = 800;
		let delayIncrement = 300;
		this.skills = [];
		// Responsive Web Design
		this.skills.push(
			{
				skillName: 'Responsive Web Design',
				iconUrl: 'images/responsive.jpg',
				delay: delay,
				description: "Through my personal and professional experience \
				I've designed many responsive websites. I have found that a \
				highly adaptable site can mean the success or failure of a project."
			});
		// R&D
		delay += delayIncrement;
		this.skills.push(
			{
				skillName: 'Research & Development',
				iconUrl: 'images/rnd.png',
				delay: delay,
				description: "Have an idea, but not sure how to execute? That's \
				my speciality. I immerse myself everyday in fringe technologies to \
				ensure I can always create the latest and greatest applications."
			});
		// Full Stack Developer
		delay += delayIncrement;
		this.skills.push(
			{
				skillName: 'Full Stack Developer',
				iconUrl: 'images/fullstack.png',
				delay: delay,
				description: "I've had contracts where I've had to work with one technology \
				or another, but as I've also had to build many of my projects from the ground \
				up I have experience with every layer of the development stack."
			});
		// Prototyping
		delay += delayIncrement;
		this.skills.push(
			{
				skillName: 'Prototyping',
				iconUrl: 'images/prototype.png',
				delay: delay,
				description: "I believe a well thought out prototype can save \
				my clients and myself a large amount of time in the long\
				run."
			});
		// UI/UX
		delay += delayIncrement;
		this.skills.push(
			{
				skillName: 'UI/UX Design',
				iconUrl: 'images/uiux.jpg',
				delay: delay,
				description: "Going along with my belief in the KISS principles \
				of development I think that at the heart of any great design \
				is simplicity."
			});
		// Web Applications
		delay += delayIncrement;
		this.skills.push(
			{
				skillName: 'Web Applications',
				iconUrl: 'images/webapp.png',
				delay: delay,
				description: "My current passion is developing with front-end frameworks to \
				create complex web applications. This portfolio website is built with the Angular 2 framework."
			});
	}
}