import { Component } from '@angular/core';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensagem: string = '';

  constructor(public _cs: ChatService) {
    
    this._cs.carregarMensagem()
      .subscribe((mensagens: any[]) => {

        console.log( mensagens );
      
      })
   }

  enviar_mensagem(){
   console.log( this.mensagem )
  }


}
