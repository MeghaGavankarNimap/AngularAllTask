import { Component, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { Observable, Subscriber } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Decorator';
  display:any;
  allusers:any;

  constructor(private userservice:UsersService,private router:Router) {}
getAllUsers(){
  this.userservice.GetAllData().subscribe(data=>{
    this.allusers=data;
    console.log(this.allusers)
  })
}

ngOnInit():void{
  this.getAllUsers();}


// }
//   show(name:any){
//     this.display=this.name;

//   }
//  @ViewChild(ChildComponent)view: any |ChildComponent


inputdata:any;
userid:any;
id:any;
name:any;
email:any;

mydata:any=[]
editCustomer(customer:any){
this.mydata=customer;
console.log(this.mydata);
  //  this.id=allusers.id;
  //  this.name=allusers.name;
  //  this.email=allusers.email;

}


edit(data: any){
  console.log(data);
}

}
