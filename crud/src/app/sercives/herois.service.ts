import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroiModel } from '../models/heroi.model';
import { map,delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroisService {
  
  private url = 'https://crud-82737-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }
  

  criarHeroi( heroi: HeroiModel ) {
      
    return this.http.post(`${this.url}/herois.json`, heroi)
      .pipe(
        map((resp: any) => {
          heroi.id = resp.name
          return heroi;
        })
      );
  }


  //Atualizar
  atualizarHeroi(heroi: HeroiModel) {

    interface HeroiTemp {
       id   ?: string;
       nome ?: string;
       poder?: string;
       vivo ?: boolean
    }

     const heroiTemp: HeroiTemp = {
      ...heroi
     };
    
    delete heroiTemp.id;

    return this.http.put(` ${this.url }/herois/${ heroi.id }.json`, heroiTemp);
    
  }
  

  //Eliminar Heroi
  eliminarHeroi( id: string ) {
    
    return this.http.delete(`${this.url}/herois/${id}.json`)
  }


  //Pegar apenas um unico heroi e atualizar 
  getHeroi( id: string ) {
    return this.http.get(`${this.url}/herois/${id}.json`);
  }
 
  //Pegar todos herois
  getHerois() {
    return this.http.get(`${this.url}/herois.json`)
      .pipe(
        map(this.createArray),
        delay(0),
      );
  }


  private createArray( heroisObj: Object) {
    

    const herois: HeroiModel[] = [];

    console.log(heroisObj);
    
    if (heroisObj === null) { return []; }
    
     Object.keys(heroisObj).forEach(key => {
        
       const heroi: HeroiModel = heroisObj[key];
       heroi.id = key;
       
       herois.push( heroi );
     });

    return herois;
  }



  
 
}
