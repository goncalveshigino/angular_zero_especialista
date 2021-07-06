import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-novo',
  template: `
    <p>
      usuario-novo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNovoComponent implements OnInit {

 constructor(private router: ActivatedRoute) {
    
    this.router.parent?.params.subscribe(parametros => {
      
      console.log("Rota Filha Usuario novo");
      console.log(parametros);
    })
   }

  ngOnInit(): void {
  }

}
