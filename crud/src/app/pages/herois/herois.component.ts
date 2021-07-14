import { Component, OnInit } from '@angular/core';
import { HeroiModel } from 'src/app/models/heroi.model';
import { HeroisService } from 'src/app/sercives/herois.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
  
  herois: HeroiModel[] = [];
  carregando = false;

  constructor( private heroisService: HeroisService) { }

  ngOnInit() {

    this.carregando = true;
    
    this.heroisService.getHerois()
      .subscribe((resp: any) => {
        this.herois = resp;
        this.carregando = false;
      });
  }
  
  eliminarHeroi(heroi: HeroiModel, i: number) {
    
    Swal.fire({

      title: 'Tem certeza disso?',
      text: `Tem certeza que deseja eliminar ${heroi.nome}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      
      if( resp.value ){
        
       this.herois.splice(i, 1);
       this.heroisService.eliminarHeroi( heroi.id ).subscribe();
      }

    })

  }


}
