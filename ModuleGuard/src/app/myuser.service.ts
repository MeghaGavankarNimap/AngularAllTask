import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyuserService {

  constructor(private http:HttpClient) { }

  reloadRole = new BehaviorSubject<any>(false);
  reloadRole$ = this.reloadRole.asObservable();
  
  url=" http://localhost:3000/Customer";

  isLoggedIn(){
    return localStorage.getItem("myuser")
  }
  
}
