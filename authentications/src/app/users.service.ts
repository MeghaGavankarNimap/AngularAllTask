import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/users";

  register(data:any){
    return this.http.post(this.url,data)
 
  }


login(data:any){
  return this.http.post("http://localhost:5000/login",data)
  
}

}
