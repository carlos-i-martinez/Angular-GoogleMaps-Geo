import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular-Google-Maps project!';
  lat: number = 30.9898;
  lng: number = -110.2892;
}
