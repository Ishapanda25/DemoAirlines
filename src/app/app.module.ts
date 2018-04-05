import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';

import { FlightdataService } from './flightSearchService/flightdata.service';
import { FlightviewComponent } from './flightview/flightview.component';



@NgModule({
  declarations: [
    AppComponent,
    FlightsearchComponent,
    FlightviewComponent,
 
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FlightdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
