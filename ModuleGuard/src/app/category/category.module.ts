import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: CategoryComponent }
]
@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class CategoryModule { }
