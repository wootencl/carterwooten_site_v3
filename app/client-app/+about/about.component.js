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
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  directives: [Footer, Skill]
})
export class About {
	constructor() {
		this.skills = [];
		// Responsive Web Design
		this.skills.push(
			{
				skillName: 'Responsive Web Design',
				iconUrl: 'images/responsive.jpg',
				delay: 300,
				description: "Through my personal and porfessional experience \
				I've designed several responsive websites. I have found that a \
				highly adaptable site can mean the success or failure of a project."
			});
		// R&D
		this.skills.push(
			{
				skillName: 'Research & Development',
				iconUrl: 'images/rnd.png',
				delay: 600,
				description: "Have an idea, but not sure how to execute? That's \
				my speciality. I immerse myself everyday in fringe technologies to \
				ensure I can always create the latest and greatest applications."
			});
		// Full Stack Developer
		this.skills.push(
			{
				skillName: 'Full Stack Developer',
				iconUrl: 'images/fullstack.png',
				delay: 900,
				description: "I've had contracts where I've had to work with one technology \
				or another, but as I've also had to build many of my project from the ground \
				up I have experience with every layer of the development stack."
			});
		// Prototyping
		this.skills.push(
			{
				skillName: 'Prototyping',
				iconUrl: 'images/prototype.png',
				delay: 1200,
				description: "I believe a well thought out prototype can save \
				potential employers and myself a large amount of time in the long\
				run."
			});
		// UI/UX
		this.skills.push(
			{
				skillName: 'UI/UX Design',
				iconUrl: 'images/uiux.jpg',
				delay: 1500,
				description: "Going along with my belief in the KISS principle \
				of development I think that at the heart of any great design \
				is simplicity."
			});
		// Web Applications
		this.skills.push(
			{
				skillName: 'Web Applications',
				iconUrl: 'images/webapp.png',
				delay: 1800,
				description: "My current passion is developing with front-end frameworks to \
				create complex web applications. This very website is built the Angular 2 framework."
			});
	}
}