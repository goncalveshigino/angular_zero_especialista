import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }
  

  getPais() {


    return this.http.get('https://restcountries.eu/rest/v2/lang/pt')
      .pipe(
        map((resp: any) =>
          
          //resp.map( pais => ({ nome: pais.name, codigo: pais.alpha3Code }))
          resp.map((pais: { name: any; alpha3Code: any; }) => ({ nome: pais.name, codigo: pais.alpha3Code })
          )
        )
        
      );
  }
}
