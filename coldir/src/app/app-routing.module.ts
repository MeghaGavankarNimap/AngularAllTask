import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColourComponent } from './colour/colour.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';






const routes: Routes = [
 
  {path:'colour',component:ColourComponent},
 {path:'pagination',component:PaginationComponent},
 {path:'lifecycle',component:LifecycleComponent},
 {path:'child',component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
