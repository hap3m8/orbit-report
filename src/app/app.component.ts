import { Component } from '@angular/core';
import { Satellite } from './satellite'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
//displayList: Satellite[];


  constructor() {
  this.sourceList = [];
  this.displayList = []

  let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

  window.fetch(satellitesUrl).then(function(response) {
    response.json().then(function(data) {
      //console.log("Hello, World");

       let fetchedSatellites = data.satellites;
      console.log(fetchedSatellites);
      //TODO: loop over satellites
      for (let i = 0; i < fetchedSatellites.length; i++) {
        let satelliteInfo = new Satellite(
          fetchedSatellites[i].name,
          fetchedSatellites[i].type,
          fetchedSatellites[i].orbitType,
          fetchedSatellites[i].operational,
          fetchedSatellites[i].launchData);
          this.sourceList.push(satelliteInfo);
          this.displayList.push(satelliteInfo);
      }
      //this.displayList = this.sourceList.slice(0);s

    }.bind(this));
  }.bind(this));

} search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    // assign this.displayList to be the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
 }
  
}



