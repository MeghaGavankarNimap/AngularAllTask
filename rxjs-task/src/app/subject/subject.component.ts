import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
 

  sub=new Subject<any>();
  mySubject(){
this.sub.next("this is from subject component")


  }

}
