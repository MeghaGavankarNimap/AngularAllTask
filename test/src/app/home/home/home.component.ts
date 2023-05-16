import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myuser:any;
  data:any;
  mydata:any;
  // constructor(private userservice:UserService){}

  constructor(private http:HttpClient) { }
  ngOnInit():void{
    this.http.get<any>('http://localhost:3000/users').subscribe(data=>{
      this.mydata=data;
    })
  }
  

}
