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
constructor() {
  this.sourceList = [];
}
}
