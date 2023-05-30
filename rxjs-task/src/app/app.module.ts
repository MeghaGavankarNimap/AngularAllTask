import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
FormControl



@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
 
    ReactiveFormsModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
