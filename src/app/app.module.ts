import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, LoginGuardFailed, LoginGuardSuccess } from './shared/Guard/Auth/auth.guard';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,NgxSpinnerModule,NgxPaginationModule, ToastrModule.forRoot(),BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]   
})
export class AppModule { }
