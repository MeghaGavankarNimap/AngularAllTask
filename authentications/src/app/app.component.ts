import { Component, ViewContainerRef } from '@angular/core';
import {User, UsersService } from './users.service';
import { Router } from 'express';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authGuard';
  currentUser!: User;


  // constructor(
  //     private router: Router,
  //     private authenticationService: UsersService
  // ) {
  //     this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  // }

  // logout() {
  //     this.authenticationService.logout();
  //     // this.router.navigate(['/login']);
  // }
}
