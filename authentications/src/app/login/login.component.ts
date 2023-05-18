import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signIn=new FormGroup({
    username:new FormControl(),
    pass:new FormControl(),


  });
  data: any;
 
  constructor(private userservice:UsersService ,private router:Router){}

login(data:any){
  this.userservice.login(data).subscribe(data=>{
    console.log(data);
    // localStorage.setItem("Token",data.token)
    // this.router.navigate(['/home'])
    
   
  })
}


}
  


