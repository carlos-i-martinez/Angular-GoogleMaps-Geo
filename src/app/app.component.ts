import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'application/json',
    'X-Content-Type-Options': 'nosniff'
  })
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Angular-Google-Maps project!';
  lat: number = 30.9898;
  lng: number = -110.2892;
  dist: Object;
  distUrl: string = 'http://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&';
  myLat: number;
  myLng: number;
  API_KEY: string = 'AIzaSyByBRF9dtwJeLx1GeCddsB5Ej0zRVmyk50';
  
  constructor (private http: HttpClient) {}

  public ngOnInit(): void {
    this.getLocation();
  }

  


  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.myLat = position.coords.latitude;
          this.myLng = position.coords.longitude;
          console.log(this.myLat);
          console.log(this.myLng);


        }
      },
        (error: PositionError) => console.log(error));
        // this.http.get(this.distUrl+'origins='+this.lat+','+this.lng+'&destinations='+this.myLat+','+this.myLng+'&mode=driving&key='+this.API_KEY, httpOptions).subscribe((d) => {
        //   console.log("result: "+JSON.stringify(d));
        // });
        //console.log(this.dist);
        const sample = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=bicycling&language=fr-FR&key='+this.API_KEY;
        
        
        this.http.get(sample, httpOptions)
        .subscribe((data) => {
          console.log(JSON.parse(JSON.stringify(data))); 
        });
        

    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
