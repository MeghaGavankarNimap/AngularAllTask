import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private cookie:CookieService) { }

  private readonly url="http://localhost:3000/users";

  GetServer():Observable<any>{
   
      return this.http.get<any>(`${this.url}`).pipe(
        tap((data) => {
        
         
        })
      );
    }
  

}
