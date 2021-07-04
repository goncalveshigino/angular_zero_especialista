import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent implements OnInit {


  alerta: string = "alert-danger";
  loading: boolean = false;

  // propriedades: Object = {

  //   danger: false
  // }

  propriedade: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  executar() {
    

    this.loading = true;
    
    setTimeout( () => this.loading = false, 3000)

  }

}
