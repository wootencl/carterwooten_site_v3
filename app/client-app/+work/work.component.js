import { Component } from '@angular/core';
import { Footer } from '../+footer/index';
import { Site } from '../+site/index'

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  directives: [Footer, Site]
})
export class Work {
	constructor() {
		this.sites = [];
		// Time Sheet Web Application
		this.sites.push(
			{
				title: 'Timesheet Web Application',
				imageUrl: 'images/tsa.png',
				url: 'http://tsademo.carterwooten.com/',
				delay: 300,
				description: "One of my first web applications. It's purpose \
				is to simplify timekeeping for my client, Elevation Healthcare, \
				and their employees."
			});
		// CWSiteV2
		this.sites.push(
			{
				title: 'Personal Website Version 2',
				imageUrl: 'images/cwV2.png',
				url: 'http://cwv2.carterwooten.com/',
				delay: 600,
				description: "Most people like to hide their obsolete creations \
				, but I think this second iteration of my website serves as a great\
				example of how far I've come."
			});
		// Coming Soon
		this.sites.push(
			{
				title: 'Coming Soon',
				imageUrl: 'images/questions.jpg',
				delay: 900,
				description: "This third iteration of my personal website is a \
				stepping stone for a project I've been wanting to build for some time."
			});
		// Github
		this.sites.push(
			{
				title: 'Github Profile',
				imageUrl: 'images/github.png',
				url: 'https://github.com/wootencl',
				delay: 1200,
				description: "Frontend development is my current passion but I have \
				experience in many different technologies. I believe my Github profile is a \
				good example of my breadth of work experience."
			});
	}
}