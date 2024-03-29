import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  chats: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.chats = db.collection('chats').valueChanges();
  }
  
}
