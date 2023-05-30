import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy {


  counter = interval(6000);


  counterstop: any;
  val: any;
  ngOnInit(): void {
    this.counterstop = this.counter.subscribe((val)=>{
      
    
    })

  }

  // unsubscribe() {
  //   this.counterstop.unsubscribe();
  // }

  ngOnDestroy(): void {
    if (this.counterstop) {
      this.counterstop.unsubscribe();
    }

  }



}








