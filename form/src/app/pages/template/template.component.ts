import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  usuario = {
    nome: 'Goncalves',
    apelido: 'Higino',
    email: 'goncalves@gmail.com',
    pais:  'AGO'
  }

  paises: any[] = [];

  constructor( private paisServices: PaisService ) { }

  ngOnInit(): void {
    

    this.paisServices.getPais()
      .subscribe(paises => {

        this.paises = paises;
         
        this.paises.unshift({
          nome: '[Selecione um Pais]',
          codigo: ''
         })

      });

    
  }


  guardar(forma: NgForm) {
    
   if (forma.invalid) {
      
      Object.values(forma.controls).forEach(control => {
        control.markAllAsTouched();
      });

      return;
    }
    
    console.log(forma)
       
    console.log( forma.value )
  }

}
