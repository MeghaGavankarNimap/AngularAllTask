import { Component } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';
// of operator
  list=['angular','python','html']
tech:Observable<string[]> =of (this.list)
ngOnInit(){
  this.tech.subscribe(data=>{
    console.log(data);
  })
}


// from operator 
// code same as of 
// FromOfOpe(){
//   const obser=fromEvent(this.operator?)
// }

timeInterval:any;

operator=interval(1000);
intOper(){
 const result=this.operator.subscribe((val: any)=>{
     console.log(val)

  })
}






}
