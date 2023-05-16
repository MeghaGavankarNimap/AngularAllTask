import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustompipeComponent } from './custompipe/custompipe.component';


const routes: Routes = [
  {path:'custompipe',component:CustompipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
