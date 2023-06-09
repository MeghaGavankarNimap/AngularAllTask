import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { MyuserService } from './myuser.service';
import { authGuard } from './auth.guard';

// {
//  path:'homecomponent'
//    const CanActivate=[authGuard]
// }





const routes: Routes = [
  
  {path:'register',component:RegisterComponent },
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate: [authGuard]}
  //  {path:'',redirectTo:'/login',pathMatch:'full'},
  // {path:'**',redirectTo:'/login',pathMatch:'full'}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

