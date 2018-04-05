import { Component,NgModule} from '@angular/core';
import { ModelUser } from './modelquery';
import { NgForm } from '@angular/forms';
import {FlightResults} from 'C:/Users/isha.panda/MyApp/src/app/flightSearchService/flightresults';
import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/flightSearchService/flightdata.service';
import { FlightviewComponent } from 'C:/Users/isha.panda/MyApp/src/app/flightview/flightview.component';

@Component({
  selector:'app-search',
    templateUrl: 'flightsearch.component.html',
    styleUrls: ['flightsearch.component.css']
})
export class FlightsearchComponent {
user = new ModelUser('','','','','');
showResults=false;
showResults1=false;
constructor(private dataService:FlightdataService) {

}
private flights:FlightResults[] = [];
    private errorMessage:any = '';

submitQuery1(userForm: NgForm)
{
 this.showResults=true;
 alert( this.showResults);
  this.dataService.fetchDetails(userForm).
  subscribe(flights => this.flights=flights, error => console.log(error));
 
}
submitQuery2(userForm: NgForm)
{
 this.showResults1=true;
 alert( this.showResults1);
  this.dataService.fetchDetails2(userForm).
  subscribe(flights => this.flights=flights, error => console.log(error));
 
}
  
  }

   
