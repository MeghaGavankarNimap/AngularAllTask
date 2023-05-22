import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


@Injectable()
export class PermissionsService {
  constructor(private route:Router){}
  canActivate(currentUser: any) {
    if(currentUser) {
      return true
    }
    else{
      
      return this.route.navigate(['/login'])
      return false;
    
    }
    
  }
  canMatch(currentUser: any): boolean {
    return true;
  }
}


export const authGuard: CanActivateFn = (route, state) => {
  let abc = JSON.parse(localStorage.getItem('currentUser') || '')
  return inject(PermissionsService).canActivate(abc);
};
