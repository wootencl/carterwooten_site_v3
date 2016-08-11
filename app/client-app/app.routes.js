import { RouterModule } from '@angular/router';

import {Home} from './+home/index';
import {About} from './+about/index';
import {Work} from './+work/index';
import {Contact} from './+Contact/index';

const appRoutes = [
  { path: '', component: Home },
  { path: 'About', component: About },
  { path: 'Work', component: Work},
  { path: 'Contact', component: Contact}
];

export const routing = RouterModule.forRoot(appRoutes);
