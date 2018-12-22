import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ServiceCustomerService} from './service-customer.service'
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'

//routage
const appRoutes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'auth/signin',component:SigninComponent},
  {path:'auth/signup',component:SignoutComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule

  ],
  providers: [
    ServiceCustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
