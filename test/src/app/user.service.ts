import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  


  constructor(private http:HttpClient) { }

  url: any= "http://localhost:3000/users";
  getUser(){
    // const httpHeader=new HttpHeaders
    return this.http.get(this.url);
  }




username:any;
  register(data:any){
    console.log('in2')
    return this.http.post(this.url,data)
    
  
    

  }


  getUserName(): Observable<string> {
    const apiUrl = 'http://localhost:3000/users'; 

    return this.http.get<any>(apiUrl).pipe(
      map(response => response.username)
    );
  }
}
