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
    this.myservice.GetAllData().subscribe(data=>{
      console.log(data);
     this.data=data;
    })
  }


clearCache(): void {
    this.myservice.clearCache();
    this.data = null;
  }
}


