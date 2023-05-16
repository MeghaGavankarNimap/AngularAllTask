import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  signIn=new FormGroup({
    username:new FormControl(),
    pass:new FormControl(),


  });


  constructor(private http:HttpClient,private route:Router) { }
  
  // url="http://localhost:3000/users";
login(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
      console.log(res);
     const user=res.find((a:any)=>{
      return a.username==this.signIn.value.username && a.pass==this.signIn.value.pass
     });
     console.log(user)
     if (user){
      // alert("login succesful");
      localStorage.setItem('myuser',JSON.stringify(user))
      this.route.navigate(['/home'])
      
     }
     else{
      alert("invalid username or password");
       this.signIn.reset();
      // this.route.navigate(['/login'])
     }
    });
  }
  



}
