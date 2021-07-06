import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-detalhe',
  template: `
    <p>
      usuario-detalhe works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalheComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    
    this.router.parent?.params.subscribe(parametros => {
      
      console.log("Rota Filha Usuario detalhe");
      console.log(parametros);
    })
   }

  ngOnInit(): void {
    
  }

}
