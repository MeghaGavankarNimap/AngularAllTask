import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private route:Router) {
    
  }
    abc:any = JSON.parse(localStorage.getItem('myuser') || '')

  logout(){
    localStorage.removeItem('myuser');
    // console.log(this.abc)
    this.route.navigate(['/login'])
    
    
  }

}

