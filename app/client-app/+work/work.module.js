import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Work } from './index';
import { FooterModule } from '../+footer/footer.module';
import { SiteModule } from '../+site/site.module';

@NgModule({
    declarations: [
        Work
    ],
    imports: [
        FooterModule,
    	SiteModule,
    	BrowserModule
    ],
    exports: [
        Work
    ]
})
export class WorkModule {
}