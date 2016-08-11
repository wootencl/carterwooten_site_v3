import { NgModule }       from '@angular/core';
// import { BrowserModule  } from '@angular/platform-browser';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { WorkModule } from './+work/work.module';
import { ContactModule } from './+contact/contact.module';
import { routing } from './app.routes';
import { App } from './app.component';


@NgModule({
  declarations: [ App ],
  imports: [
    AboutModule,
    ContactModule,
    HomeModule,
    WorkModule,
    routing
   ],
  bootstrap: [ App ],
})
export class AppModule {}
