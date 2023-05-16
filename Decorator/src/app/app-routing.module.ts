import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

import { ParentsComponent } from './parents/parents.component';
import { ChildComponent } from './child/child.component';



const routes: Routes = [
  {path:'parent',component:ParentComponent},
  {path:'parents',component:ParentsComponent},
  {path:'child',component:ChildComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
