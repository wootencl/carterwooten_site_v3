import { Component } from '@angular/core';
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
				description: "Through my personal and porfessional experience \
				I've designed several responsive websites. I have found that a \
				highly adaptable site can mean the success or failure of a project."
			});
		// R&D
		this.skills.push(
			{
				skillName: 'Research & Development',
				iconUrl: 'images/rnd.png',
				description: "Have an idea, but not sure how to execute? That's \
				my speciality. I immerse myself everyday in fringe technologies to \
				ensure I can always create the latest and greatest applications."
			});
		// UI/UX
		this.skills.push(
			{
				skillName: 'UI/UX Design',
				iconUrl: 'images/design.png',
				description: "Going along with my belief in the KISS principle \
				of development I think that at the heart of any great design \
				is simplicity."
			});
		// Prototyping
		this.skills.push(
			{
				skillName: 'Prototyping',
				iconUrl: 'images/prototype.png',
				description: "I believe a well thought out prototype can save \
				potential employers and myself a large amount of time in the long\
				run."
			});
	}
}