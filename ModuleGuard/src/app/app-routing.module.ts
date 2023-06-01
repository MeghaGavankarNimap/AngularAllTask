import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

import { moduleGuard } from './module.guard';
import { CategoryComponent } from './category/category.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', loadChildren:()=> import('../app/login/login.module').then(m=> m.LoginModule) },
  { path: 'category', loadChildren:()=> import('../app/category/category.module').then(m=> m.CategoryModule) },
  { path: 'product', loadChildren:()=> import('../app/product/product.module').then(m=> m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
