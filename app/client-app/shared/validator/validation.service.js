//Original version created by Cory Rylan: https://coryrylan.com/blog/angular-2-form-builder-and-validation-management


import { AbstractControl } from '@angular/common';

export class ValidationService {
	emailValidator(control) {
    if (control.value) {
    	if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
          return null;
      } else {
          return { 'invalidEmailAddress': true };
      }
    }
  }
}