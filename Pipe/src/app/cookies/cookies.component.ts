import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MyuserService } from '../myuser.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent {
  serverdata: any;
  constructor(private myservice:MyuserService,private cookie:CookieService,private userservice:UserService){}

  cookieValue:any;
Allow(){
   this.cookie.set('data','angular',{expires:1})
  
    this.cookieValue = this.cookie.get('data');
    console.log(this.cookieValue)
    }

// Check(){
  
//   if(this.cookieValue){
    
//   }
// val: any;
//   data:any;
//   // constructor(private myservice:MyuserService){}
val:any;
AllowForServer(){
    
    // if(data){
    //   this.val=this.cookie.get('data')
    // }
    // else{
    //   this.userservice.GetServer().subscribe((data:any)=>{
    //     console.log(data)
    //     this.cookie.set(data)
    //   })

    // }



    
  }



  

   


Decline(){
this.cookie.delete('data')
}

}
