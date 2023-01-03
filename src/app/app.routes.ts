import {Routes} from '@angular/router'
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
  ];

export {ROUTES}