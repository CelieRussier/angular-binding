import { Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { KitchenComponent } from './kitchen/kitchen.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'developer', component: DeveloperComponent },
];

export { ROUTES };