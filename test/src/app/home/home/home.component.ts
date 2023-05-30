import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myuser: any;
  data: any;
  mydata: any;
  abc: any = JSON.parse((localStorage.getItem('myuser') || ''))

  // constructor(private userservice:UserService){}

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe(data => {
      console.log(data);
      // this.mydata=data;
    })
  }




}
