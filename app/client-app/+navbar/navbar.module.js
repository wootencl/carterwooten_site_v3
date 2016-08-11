import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBar } from './index';


@NgModule({
    declarations: [
        NavBar
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavBar
    ]
})
export class NavBarModule {
}