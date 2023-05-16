import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  myuserservice: any;
  mydata:any;
  val:any;
  
  constructor(private http:HttpClient,private fb:FormBuilder) { }
  signUp=this.fb.group({
    username:[],
    pass:[],
    role:[]

  });

  url="http://localhost:3000/users";
  saveuser(val:any){
    this.http.post<any>('http://localhost:3000/users',val).subscribe(data=>{
      this.mydata=data;
      alert("regiserd successfully");
      console.log(this.mydata);
    })
  }



}
