import { Component } from '@angular/core';
// import { UsersService } from '../users.service';
export interface Customer {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  

  customers: Customer[] = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    { id: 3, name: 'Customer 3', email: 'customer3@example.com' },
  ];


// constructor(private userservice:UsersService) {}
// allusers:any;
// getAllUsers(){
//   this.userservice.GetAllData().subscribe(data=>{
//     this.allusers=data;
//     console.log(this.allusers)
//   })
// }
 
// ngOnInit():void{
//   this.getAllUsers();}




// inputdata:any;
// userid:any;
// id:any;
// name:any;
// email:any;

// mydata:any=[]
// editCustomer(customer:any){
// this.mydata=customer;
// console.log(this.mydata);
//   //  this.id=allusers.id;
//   //  this.name=allusers.name;
//   //  this.email=allusers.email

// }


selectedCustomer: Customer | null = null;

editCustomer(customer: Customer) {
  this.selectedCustomer = { ...customer };
}

  updateCustomer(updatedCustomer: Customer) {
    const index = this.customers.findIndex(
      (customer) => customer.id === updatedCustomer.id
    );
    if (index !== -1) {
      this.customers[index] = { ...updatedCustomer };
    }
    this.selectedCustomer = null;
  }
}