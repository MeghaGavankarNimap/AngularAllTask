import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.scss']
})
export class Subject2Component {
 
  ngOnInit(){
    
 
  }
  output:any;
inputText:any;
Sub:any;
 constructor(){
  this.Sub=new Subject<any>();
  this.Sub.subscribe((val:any)=>{
    this.output=val;
    // console.log(val)
  });

 }
}
