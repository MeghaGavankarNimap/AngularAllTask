import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environemnt } from 'src/environment/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http:HttpClient) { }
 apiUrl = environemnt.hostURL;
  // url: any= "http://localhost:3000/users";
  getUser(){
    // const httpHeader=new HttpHeaders
    let id = 12;
    return this.http.get(`${this.apiUrl}users/${id}`);
    // return this.http.get(`${this.apiUrl}/users/${id}`);
  }


  

 
  
  


  
}
