import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';
import { Subject2Component } from './subject2/subject2.component';




const routes: Routes = [
  {path:'rxjs',component:RxjsComponent},
  {path:'subject',component:SubjectComponent},
  {path:'subject2',component:Subject2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
