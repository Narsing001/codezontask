import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Companant/header/header.component';
import { ProductComponent } from './Companant/product/product.component';
import { AddtocartComponent } from './Companant/addtocart/addtocart.component';
import { AdduserComponent } from './Companant/adduser/adduser.component';
import {HttpClientModule}from '@angular/common/http';
import { LimitToPipe } from './Pipes/limit-to.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AddtocartComponent,
    AdduserComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
