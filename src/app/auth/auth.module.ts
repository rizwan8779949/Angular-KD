import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


  
@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,AuthRoutingModule,SharedModule,FormsModule,ReactiveFormsModule
  ]
})
export class AuthModule { }
