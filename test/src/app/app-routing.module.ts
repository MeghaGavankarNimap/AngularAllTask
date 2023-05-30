import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { UserComponent } from './user/user.component';
import { HeadersComponent } from './headers/headers.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'user',component:UserComponent},
  {path:'headers',component:HeadersComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
