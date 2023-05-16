import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable()
export class PermissionsService {
  constructor(private route:Router){}
  canActivate(currentUser: any) {
    if(currentUser) {
      if(){
        currentUser.role=='admin'
        return true
      }
      
    }
    else{
      
      return this.route.navigate(['login'])
      
    
    }
    
  }
  canMatch(currentUser: any): boolean {
    return true;
  }
}


// export const authGuard: CanActivateFn = (route, state) => {
//   let abc = JSON.parse(localStorage.getItem('myuser') || '')
//   return inject(PermissionsService).canActivate(abc);
// };


export const moduleGuard: CanActivateFn = (route, state) => {
  let abc = JSON.parse(localStorage.getItem('myuser') || '')
  return inject(PermissionsService).canActivate(abc);
};
