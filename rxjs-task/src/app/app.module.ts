import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { Subject2Component } from './subject2/subject2.component';




@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    SubjectComponent,
    Subject2Component
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
