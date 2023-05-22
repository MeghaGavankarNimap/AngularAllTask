import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Customer } from '../parent/parent.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
// @Input() id:any;
// @Input() name:any;
// @Input() email:any;

 
// @Output() editing:EventEmitter<string>=new EventEmitter<string>();
//   data: any;
// update(){
//   //  this.editing.emit(value);
// }

// @Output() dataEvent = new EventEmitter<any>();


// value:any=[];
// emitData(value:any) {
//  this.data = value; // Replace with your actual data
//   console.log(this.data);
//   this.dataEvent.emit(this.data);
 
// }

  @Input() customer!: Customer;
@Output() customerUpdated = new EventEmitter<Customer>();

submitForm() {
  this.customerUpdated.emit(this.customer);
}
}
