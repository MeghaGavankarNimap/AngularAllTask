import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { ChildComponent } from './child/child.component';
import { ChildsComponent } from './childs/childs.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
