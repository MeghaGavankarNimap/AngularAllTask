import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private route:Router) {
    
  }
    abc:any = JSON.parse(localStorage.getItem('myuser') || '')

  logout(){
    localStorage.removeItem('myuser');
    // console.log(this.abc)
    this.route.navigate(['/login'])
    
    
  }

}
