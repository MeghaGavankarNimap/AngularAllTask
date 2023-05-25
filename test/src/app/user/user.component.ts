import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

import { Injectable } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  myuser:any;
  data:any;
  mydata:any;
  // constructor(private userservice:UserService){}

  constructor(private http:HttpClient) { }
  ngOnInit():void{
    this.http.get<any>('http://localhost:3000/user').subscribe(data=>{
      this.mydata=data;
    })
  }
  
  
}
