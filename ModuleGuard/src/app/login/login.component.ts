import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  myuserservice: any;
  mydata:any;
  val:any;
  
  
  // constructor(myuserservice:MyuserService){}
  constructor(private http:HttpClient,private fb:FormBuilder,private route:Router) { }
  signIn=this.fb.group({
    username:[],
    pass:[],
    role:[]

  });


  
  
  // url="http://localhost:3000/users";
login(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
      console.log(res);
     const user=res.find((a:any)=>{
      return a.username==this.signIn.value.username && a.pass==this.signIn.value.pass && a.role==this.signIn.value.role
     });
     console.log(user)
     if (user){
      alert("login succesful");
      localStorage.setItem('myuser',JSON.stringify(user))
      this.route.navigate(['/category'])
      
     }
     else{
      alert("invalid username or password");
       this.signIn.reset();
      // this.route.navigate(['/login'])
     }
    });
  }
  






}
