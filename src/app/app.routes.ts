import {Routes} from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyFormComponent } from './my-form/my-form.component';

const ROUTES: Routes = [
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'my-form', component: MyFormComponent}
  ];

export {ROUTES}