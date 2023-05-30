import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  // constructor(private userservce:UserService) {}
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('myuser')) {

      let localStorageData = JSON.parse((localStorage.getItem('myuser') || ''))
      //  let localStorageData = localStorage.getItem('myuser') ; 

      if (localStorageData) {
        let request = req.clone({
          setHeaders: {
            'X-User': `localStorageData`
          }
        });

        // const modifiedReq = req.clone({ headers });
        // const headers = req.headers.set('X-User', localStorageData);

        return next.handle(request);
      }
    }
    return next.handle(req);
  }



  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  // const token = 'YOUR_TOKEN_HERE';

  // // Clone the request and add the token to the headers
  // const authRequest = request.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });

  // // Pass the cloned request to the next handler
  // return next.handle(authRequest);




  // 1st task

  //  let Token=request.clone({
  //   headers:request.headers.append('MyToken','angular'),
  //  });
  //  return next.handle(Token)



  // let data = localStorage.getItem('myuser') || ''



  // const username = request.clone({
  //   setHeaders: {
  //      Authorization: `Bearer ${data}`
  //   }
  //  });


  //  return next.handle(username);



  // have to do tomorrow
  // const currentUser = this.userser;
  //   const isLoggedIn = currentUser && currentUser.token;
  //   const isApiUrl = request.url.startsWith('http://localhost:4000/');
  //   if (isLoggedIn && isApiUrl) {
  //       request = request.clone({
  //           setHeaders: {
  //               Authorization: `Bearer ${currentUser.token}`
  //           }
  //       });
  //   }

  //   return next.handle(request);

  // }



}



