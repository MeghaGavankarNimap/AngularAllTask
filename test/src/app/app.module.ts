import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { HeadersComponent } from './headers/headers.component';
import { RegisterComponent } from './register/register.component';

import {MatPaginatorModule} from '@angular/material/paginator';

import { MatFormField, MatFormFieldModule, MatLabel, matFormFieldAnimations } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { LoginComponent } from './login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    UserComponent,
    HeadersComponent,
    RegisterComponent,
    LoginComponent,
    
    
    
  ],
  exports: [
    MatButtonModule,
    
   
    
    
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
   
    MatFormFieldModule,
  
    MatCardModule,
   
    MatInputModule,



    
   
   
 
   
   
  
   
    

    
    
    
  ],
  providers: [UserService,{provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorInterceptor, multi: true 

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
