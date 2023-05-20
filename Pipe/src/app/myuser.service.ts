import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyuserService {

  constructor( private http:HttpClient) { }
  url="http://localhost:3000/users";
  GetAllData(){
    return this.http.get(this.url);
  }
}
