import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { authGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,canActivate:[HomeComponent],
  }
           
    ];
    


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
