import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';




import { HttpClientModule } from '@angular/common/http';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UsersService } from './users.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
   
    RegisterComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule
    
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
