import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  
  public forma!: FormGroup;

  constructor(  private fb: FormBuilder,
                private validadores: ValidatorsService )  {
    

    this.criarFormulario();
    this.carregarDadosForm();
   
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

  get usuarioNoValido() {
     return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
  }

  get destritoInvalido() {
    return this.forma.get('direcao.destrito').invalid && this.forma.get('direcao.destrito').touched
  }

    get cidadeInvalido() {
    return this.forma.get('direcao.cidade').invalid && this.forma.get('direcao.cidade').touched
    }
  
  get passaTempos() {  
    return this.forma.get('passaTempos') as FormArray;
  }


  get pass1NoValido() {
    
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }

   get pass2NoValido() {
    
     const pass1 = this.forma.get('pass1').value;
     const pass2 = this.forma.get('pass1').value;
     
     return (pass1 === pass2) ? false : true;
  }

  

  criarFormulario() {

    this.forma = this.fb.group({
      
      nome     : ['', [Validators.required, Validators.minLength(5) ] ],
      apelido  : ['', [Validators.required, this.validadores.noGonza ] ],
      email    : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario  : ['', , this.validadores.existeUsuario ],
      pass1    : ['',Validators.required, ],
      pass2    : ['', [Validators.required]],
      direcao  : this.fb.group({
        destrito: ['', Validators.required],
        cidade  : ['', Validators.required]
      }),
      passaTempos: this.fb.array([])    
    }, {
      validators: this.validadores.passwordIguais('pass1','pass2')
    });
 
  } 


  carregarDadosForm() {
    

   // this.forma.setValue
    this.forma.reset({
      nome: "Gonza",
      apelido: "Higino",
      email: "higino@gmail.com",
      pass1: "123",
      pass2: "123",
      direcao: {
        destrito: "Figo",
        cidade: "Luango"
      }
    });


  }
  

  guardar() {
    
    console.log(this.forma);
    

    if (this.forma.invalid) {
      
      return Object.values(this.forma.controls).forEach(control => {
       
        if (control instanceof FormGroup) {
          Object.values( control.controls ).forEach( control => control.markAllAsTouched() );
        } else {
           control.markAllAsTouched();
        }


      });

    }

    // Depois de fazer post, limpar o form
    // this.forma.reset(
    //   {  nome: "Deus e amor"}
    //   );

  }

  addPassaTempo() {
    
   this.passaTempos.push( this.fb.control( '') )
  }

  eleminarPassaTempo(i: number) {
    this.passaTempos.removeAt(i);
  }


}
