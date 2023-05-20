import { Component } from '@angular/core';
import { MyuserService } from '../myuser.service';
import { Observable, Subscriber } from 'rxjs';
import { Data } from '@angular/router';





@Component({
  selector: 'app-caching',
  templateUrl: './caching.component.html',
  styleUrls: ['./caching.component.scss']
})
export class CachingComponent {
  
 
  val: any;
  data:any;
  constructor(private myservice:MyuserService){}

  ShowData(){
    this.myservice.GetAllData().subscribe(val=>{
      console.log(val);
     this.data=val;
    })
  }
// store Map data
// stateMap=new Map<val>;


}
