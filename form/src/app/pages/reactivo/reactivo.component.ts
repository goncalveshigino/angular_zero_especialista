import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  
  public forma!: FormGroup;

  constructor(  private fb: FormBuilder )  {
    

    this.criarFormulario();
   
  }


  ngOnInit(): void {

  }
 
  get nomeInvalido() {
    return this.forma.get('nome').invalid && this.forma.get('nome').touched
  }

  get apelidoInvalido() {
    return this.forma.get('apelido').invalid && this.forma.get('apelido').touched
  }

  get emailInvalido() {
    return this.forma.get('email').invalid && this.forma.get('email').touched
  }

  criarFormulario() {

    this.forma = this.fb.group({
      
      nome   : ['', [Validators.required, Validators.minLength(5) ] ],
      apelido: ['', Validators.required ],
      email  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      direcao: this.fb.group({
        destrito: ['', Validators.required],
        cidade: ['', Validators.required]
      })     
    });

    
  }
  

  guardar() {
    
    console.log(this.forma);
    

    if ( this.forma.invalid ) {
      
     return Object.values( this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      });

    }

  }


}
