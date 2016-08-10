import { 
	Component,
	trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import {  
  FORM_DIRECTIVES,  
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,
  FormControl,  
  FormGroup,
  Validators  
} from '@angular/forms';

import { Footer } from '../+footer/index';
import { EmailService } from '../shared/index'
@Component({
	providers: [EmailService],
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  directives: [Footer, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
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
export class Contact {
	constructor(emailService: EmailService) {
		this.emailService = emailService;
		this.form = new FormGroup({
		  name: new FormControl('', Validators.required),
		  email: new FormControl('', Validators.required),
		  message: new FormControl('', Validators.required)
		});

		this.name = this.form.controls['name'];
		this.email = this.form.controls['email'];
		this.message = this.form.controls['message'];
	}
	onFormSubmit() {
		this.emailService.sendEmail(this.form.value)
			.subscribe(
				res => console.log('success'),
				err => console.log('error'));
	};
}