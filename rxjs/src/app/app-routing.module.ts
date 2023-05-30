import { HostListener, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostListnerComponent } from './host-listner/host-listner.component';

const routes: Routes = [
  {path:'host',component:HostListnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
