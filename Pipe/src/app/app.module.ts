import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustompipeComponent } from './custompipe/custompipe.component';

import { CustomPipe } from './custom.pipe';
import { CachingComponent } from './caching/caching.component';
import { MyuserService } from './myuser.service';
import { HttpClientModule } from '@angular/common/http';
import { CookiesComponent } from './cookies/cookies.component';
import {CookieService} from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    CustompipeComponent,
    CustomPipe,
    CachingComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [MyuserService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
