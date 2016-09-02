import { 
	Component,
	trigger,
  state,
  style,
  transition,
  animate,
  OnInit
} from '@angular/core';

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
import { ValidationService } from '../shared/index';
@Component({
	providers: [EmailService, ValidationService],
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
export class Contact implements OnInit {
	constructor(emailService: EmailService, formBuilder: FormBuilder, validationService: ValidationService) {
		this.emailService = emailService;
    this.formBuilder = formBuilder;
    this.validationService = validationService;
    this.formTouched = false;
    this.serverResponseHidden = true;
    this.serverResponseNotHidden = false;
	}
  ngOnInit() {
    this.model = {};
    this.form = this.formBuilder.group({
      name: [this.model.name, Validators.required],
      email: [this.model.email, [Validators.required, this.validationService.emailValidator]],
      message: [this.model.message, Validators.required]
    });

    this.form.valueChanges.subscribe((data) => {
      if (!this.formTouched) {
        this.formTouched = true;
      }
    });
  }
	onFormSubmit() {
		this.emailService.sendEmail(this.form.value)
			.subscribe(
				res => {
          this.form.reset();
          this.formTouched = false;
          this.serverResponseHidden = false;
          this.serverResponseNotHidden = true;
        },
				err => console.log('error'));
	};
  serverMessageOked() {
    this.serverResponseHidden = true;
    this.serverResponseNotHidden = false;
  }
}