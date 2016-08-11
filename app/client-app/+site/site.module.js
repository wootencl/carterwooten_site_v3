import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Site } from './index';

@NgModule({
    declarations: [
        Site
    ],
    imports: [ BrowserModule ],
    exports: [
        Site
    ]
})
export class SiteModule {
}