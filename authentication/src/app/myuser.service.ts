import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyuserService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

constructor(private http:HttpClient) { }
  
  url="http://localhost:3000/users";

  isLoggedIn(){
    return localStorage.getItem("myuser")
  }
  

  
}
