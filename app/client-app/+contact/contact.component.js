import { Component } from '@angular/core';
import {  
  FORM_DIRECTIVES,  
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,
  FormControl,  
  FormGroup,
  Validators  
} from '@angular/forms';

import { EmailService } from '../shared/index';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class Contact {
	constructor(emailService: EmailService) {
		// this.emailService = emailService;
		// this.form = new FormGroup({
		//   name: new FormControl('', Validators.required),
		//   email: new FormControl('', Validators.required),
		//   message: new FormControl('', Validators.required)
		// });

		// this.name = this.form.controls['name'];
		// this.email = this.form.controls['email'];
		// this.message = this.form.controls['message'];
	}
	onFormSubmit() {
		this.emailService.sendEmail(this.form.value)
			.subscribe(
				res => console.log('success'),
				err => console.log('error'));
	};
}