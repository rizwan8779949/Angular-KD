import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardFailed, LoginGuardSuccess, AuthGuard } from './shared/Guard/Auth/auth.guard';
// import { LoginGuardFailed, LoginGuardSuccess } from './shared/auth/auth/auth.guard';


const routes: Routes = [
  {  
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
},  
{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    // canActivate:[LoginGuardSuccess]
},   
{       
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
}         
];  
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
