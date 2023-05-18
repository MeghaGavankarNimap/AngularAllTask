import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  // url:"http://localhost:3000/User" | undefined;

  GetAllData(){
     return this.http.get('http://localhost:3000/User');
  }


}
