import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { About } from './index';
import { FooterModule } from '../+footer/footer.module';
import { SkillModule } from '../+skill/skill.module';

@NgModule({
    declarations: [
        About
    ],
    imports: [
        BrowserModule,
    	FooterModule,
    	SkillModule
    ],
    exports: [
        About
    ]
})
export class AboutModule {
}