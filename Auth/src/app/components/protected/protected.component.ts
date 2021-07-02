import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: [
  ]
})
export class ProtectedComponent implements OnInit {

  constructor( public auth: AuthService) { }

  ngOnInit(): void {
    console.log('on')
    this.auth.userProfile$.subscribe(perfil => {
      console.log(perfil);
    })

  }

}
