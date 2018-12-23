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
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { EditeCustomerComponent } from './edite-customer/edite-customer.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BoxMultipleComponent } from './box-multiple/box-multiple.component'


//routage
const appRoutes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'auth/signin',component:SigninComponent},
  {path:'auth/signup',component:SignoutComponent},
  {path:'edite',component:EditeCustomerComponent},
  {path:'file',component:FileUploadComponent}




]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignoutComponent,
    EditeCustomerComponent,
    FileUploadComponent,
    BoxMultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule

  ],
  providers: [
    ServiceCustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
