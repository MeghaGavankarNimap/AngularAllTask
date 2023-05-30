import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorComponent } from './operator/operator.component';
import { HostListnerComponent } from './host-listner/host-listner.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    HostListnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
