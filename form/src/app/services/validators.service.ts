import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }
  

  noGonza(control: FormControl): {[s:string]: boolean } {
    
    if (control.value?.toLowerCase() === 'gonza') {
      return {
        noGonza: true
      }
    }

    return null;
  }
}
