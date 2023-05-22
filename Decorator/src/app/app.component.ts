import { Component, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { Observable, Subscriber } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Decorator';
  display:any;
  allusers:any;



}




