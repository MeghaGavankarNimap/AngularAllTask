import { Component } from '@angular/core';
import { environemnt } from 'src/environment/environment.prod';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DotEnv';
  apiUrl = envConfig.API_URL;
  apiKey = envConfig.API_KEY;
}
