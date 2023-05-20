import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
// import { User } from '../models';
export class User {
  id!: number;
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private currentUserSubject: BehaviorSubject<User|null>;
  public currentUser: Observable<User|null>;

 

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();



}


getAll() {
  return this.http.get<User[]>(`http://localhost:4000/users/authenticate`);
}

public get currentUserValue(){
  return this.currentUserSubject.value;
}



login(signinform:any) {
  return this.http.post<any>(`http://localhost:4000/users/authenticate`, signinform)
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}
  url="http://localhost:3000/users";



  register(data:any){
    return this.http.post(this.url,data)
  }


// login(data:any){
//   return this.http.post("http://localhost:5000/login",data)
  
// }

}
