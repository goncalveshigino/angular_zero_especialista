import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      
    <app-ng-style></app-ng-style>
    <br>

    <app-classes></app-classes>
    <br>

    <p [appResaltado]="'orange'">
      Ola mundo
    </p>
    <br>
     
    <app-ng-switch></app-ng-switch>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
  ngAfterViewInit() {
      console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
  }
  ngAfterContentChecked() {
     console.log("ngAfterViewChecked");
  }
  ngDoCheck() {
   console.log("ngDoCheck");
  }
  ngAfterContentInit() {
     console.log("ngAfterContentInit");
  }
  ngOnDestroy(){
     console.log("ngOnDestroy");
  }
  ngOnChanges(){
     console.log("ngOnChanges");
  }

  ngOnInit() {

    console.log("ngOnInit");
  }

 
}
