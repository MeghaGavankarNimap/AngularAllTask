import { Component } from '@angular/core';
import { environemnt } from 'src/environment/environment.prod';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DotEnv';
  url:any;
  constructor(){
    // this.url=environemnt.hostURL;
    // this.url=process.env['hostURL']

  }
}
