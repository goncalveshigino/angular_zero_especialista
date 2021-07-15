import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensagem: string = '';

  constructor() { }

  enviar_mensagem(){
   console.log( this.mensagem )
  }


}
