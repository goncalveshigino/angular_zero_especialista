import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `


    <p [style.fontSize.px]="size">
     Ola mundo esta na hora
    </p>

   <div class="mb-2">
   
    <button class="btn btn-primary " (click)="size = size + 5">
    <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-danger" (click)="size = size - 5">
    <i class="fa fa-minus"></i>
    </button>
   
   <div>


  `,
  styles: [

  ]
})
export class NgStyleComponent implements OnInit {


  size: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
