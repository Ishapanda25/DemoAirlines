import { Component, AfterViewInit } from '@angular/core';
import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/flightSearchService/flightdata.service';
import {FlightResults} from 'C:/Users/isha.panda/MyApp/src/app/flightSearchService/flightresults';

@Component({
  selector: 'app-flightview',
  templateUrl: './flightview.component.html',
  styleUrls: ['./flightview.component.css']
})
export class FlightviewComponent  {

  constructor(private dataService:FlightdataService) {

  }
  private flights:FlightResults[] = [];
      private errorMessage:any = '';
    

}
