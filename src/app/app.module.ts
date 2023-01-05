import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import{ ROUTES} from './app.routes'
import { FormsModule } from '@angular/forms';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateOnomatopiaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
