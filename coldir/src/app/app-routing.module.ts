import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColourComponent } from './colour/colour.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';





const routes: Routes = [
 
  {path:'colour',component:ColourComponent},
 {path:'pagination',component:PaginationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
