import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'theme';
  storedTheme:any=localStorage.getItem('theme-color')
  constructor(){}
  ngOnInit() {}
  setTheme(){
    if(this.storedTheme=='theme-dark'){
      localStorage.setItem('theme-color','theme-light');
      this.storedTheme=localStorage.getItem('theme-color');

    }else{
      localStorage.setItem('theme-color','theme-dark');
      this.storedTheme=localStorage.getItem('theme-color')

    }

    }
  }

