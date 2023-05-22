import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatIconModule} from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import {MatCardContent, MatCardModule} from '@angular/material/card';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      // MatToolbarModule,
      MatSlideToggleModule,
      MatCardModule,
      MatIconModule,
  
      
     AppRoutingModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
