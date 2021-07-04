import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      
    <app-ng-style></app-ng-style>

    <app-classes></app-classes> 

    <p [appResaltado]="'orange'">
      Ola mundo
    </p>
     
    <app-ng-switch></app-ng-switch>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
