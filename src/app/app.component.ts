import { Component } from '@angular/core';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { FlightviewComponent } from './flightview/flightview.component';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAirlines';

  }
