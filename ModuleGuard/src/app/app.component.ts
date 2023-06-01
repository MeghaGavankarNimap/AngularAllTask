import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyuserService } from './myuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ModuleGuard';
  user:any;
  constructor(public router: Router , public service:MyuserService) { 
    service.reloadRole.subscribe(
      res=>{
        console.log(res);
        if(res){
          this.ngOnInit();
        }
      }
    )
  }

  ngOnInit(): void {
    this.getRole();
  }

  getRole(){
    if(localStorage.getItem('myuser')){
      this.user = JSON.parse(localStorage.getItem('myuser') || '')
      console.log(this.user)
  }
  }

 
  get isAdmin() {
    if (this.user?.role == 'admin') return true
    return false
  }

  get isSupervisor() {
    if (this.user?.role == 'supervisor') return true
    return false
  }






  // }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login'])

  }


}

