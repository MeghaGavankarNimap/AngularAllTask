import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ColorchangeDirective } from './colorchange.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { ColourComponent } from './colour/colour.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatFormField, MatFormFieldModule, MatLabel, matFormFieldAnimations } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';
import { ForEachComponent } from './for-each/for-each.component';




@NgModule({
  declarations: [
    AppComponent,
    ColorchangeDirective,
    PaginationComponent,
    ColourComponent,
    LifecycleComponent,
    ChildComponent,
    ForEachComponent
  ],
  exports: [
    MatButtonModule,
   
    
    
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    

    
    
    
    
    
    
    
    
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
