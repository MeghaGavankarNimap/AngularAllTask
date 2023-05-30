import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
getUserName() {
throw new Error('Method not implemented.');
}

  constructor(private userservice:UserService,private fb:FormBuilder){}
  
  signUp=this.fb.group({
  username:[''],
  pass:[''],
  })

  saveuser(val:any){
    console.log('any')
    this.userservice.register(val).subscribe(data=>{
      alert("registered successfully")
      
    })
  }




  
}
