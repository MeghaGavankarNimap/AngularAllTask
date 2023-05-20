import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { CachingComponent } from './caching/caching.component';



const routes: Routes = [
  {path:'custompipe',component:CustompipeComponent},
  {path:'caching',component:CachingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
