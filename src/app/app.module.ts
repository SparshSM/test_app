import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { CrudComponent } from './components/crud/crud.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { userdata} from './services/users';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(userdata),
  ],
  exports: [
    ReactiveFormsModule,
    SignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
