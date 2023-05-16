import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustompipeComponent } from './custompipe/custompipe.component';

import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
   
    CustompipeComponent,
       
        CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
