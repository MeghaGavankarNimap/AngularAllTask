import { Component } from '@angular/core';

import { UsersService } from './users.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Decorators';
  allusers: any;
//  Customer = [
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//     { id: 3, name: 'Neha patil', email: 'neha@example.com' },
//     { id: 4, name: 'pooja kadam', email: 'pooja@example.com' },
//     { id: 5, name: 'teja navale', email: 'teja@example.com' },
   
    
//   ];
//   editCustomer(customer:any){

//   }

constructor(private userservice:UsersService) {}
getAllUsers(){
  this.userservice.GetAllData().subscribe(data=>{
    this.allusers=data;
    console.log(this.allusers)
  })
}

ngOnInit():void{
  this.getAllUsers();
}

edit(customer:any){


}
transferdata(new){
  
}
}
