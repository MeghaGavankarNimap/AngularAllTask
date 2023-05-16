import { Component } from '@angular/core';
import { UsersService } from '../users.service';
UsersService

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  
  constructor(private userservice:UsersService){ }
    


  //  Customer: any[] = [
  //   { id: 1, name: 'John Doe', email: 'john@example.com' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
 
  // ]; 

customers:any;
 

ngOnInit(){
this.customers=this.userservice.getUSer().subscribe(data=>{
  console.log(data);
  this.customers=data;
});

  }

  editCustomer(customer:any){
    
  }
  
}
