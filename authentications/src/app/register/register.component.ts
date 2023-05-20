import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userservice:UsersService,private fb:FormBuilder){}

  signUp=this.fb.group({
  username:[''],
  pass:['']
  })

  saveuser(val:any){
    this.userservice.register(val).subscribe(data=>{
      alert("registered successfully")
    })
  }

}
