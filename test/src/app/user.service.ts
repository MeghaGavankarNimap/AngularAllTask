import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  


  constructor(private http:HttpClient) { }
  url:"http://localhost:3000/users" | any;
  getUser(){
    return this.http.get(this.url);
  }
}
