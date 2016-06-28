import {Home} from './+home/index';
import {About} from './+about/index';
import {Work} from './+work/index';
import {Contact} from './+Contact/index';

export const APP_ROUTES = [
  { path: '', component: Home },
  { path: 'About', component: About },
  { path: 'Work', component: Work},
  { path: 'Contact', component: Contact}
];
