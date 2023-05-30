import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { CachingComponent } from './caching/caching.component';
import { CookiesComponent } from './cookies/cookies.component';




const routes: Routes = [
  {path:'custompipe',component:CustompipeComponent},
  {path:'caching',component:CachingComponent},
  {path:'cookies',component:CookiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
