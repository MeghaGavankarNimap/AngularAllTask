import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myuserservice: any;
  mydata: any;
  val: any;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }
  // constructor(myuserservice:MyuserService){}
  signIn = this.fb.group({
    username: [''],
    pass: [''],
  })







  login(val: any) {
    this.http.get<any>('http://localhost:3000/users').subscribe(res => {
      console.log(res);
      const user = res.find((a: any) => {
        return a.username == this.signIn.value.username && a.pass == this.signIn.value.pass
      });
      console.log(user)
      if (user) {
        console.log(user);
        alert("login succesful");
        localStorage.setItem('myuser', JSON.stringify(user));
        this.router.navigate(['/home'])


        //  localStorage.setItem('myuser',user);
        // let MYUSER=localStorage.getItem('myuser')
      }
      else {
        alert("invalid username or password");
        this.signIn.reset();
        // this.route.navigate(['/login'])
      }
    });
  }


}
