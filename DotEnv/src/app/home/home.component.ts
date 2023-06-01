import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myuser: any;
  data: any;
  mydata: any;



  // constructor(private userservice:UserService){}

  constructor(private http: HttpClient,private userservice:UserService) { }
  ngOnInit(): void {
    this.userservice.getUser().subscribe(data => {
      console.log(data);
       this.mydata=data;
    })
  }


}
