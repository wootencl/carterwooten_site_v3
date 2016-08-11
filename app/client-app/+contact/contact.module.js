import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { Contact } from './index';
import { FooterModule } from '../+footer/footer.module';
import { EmailService } from '../shared/index';

@NgModule({
    declarations: [
      Contact
    ],
    imports: [
    	FooterModule
    ],
    exports: [
      Contact
    ],
    providers: [ 
        EmailService,
        HttpModule
    ]
})
export class ContactModule {
}