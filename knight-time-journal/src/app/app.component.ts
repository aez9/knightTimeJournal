import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';

interface JournalDoc {
  backColor: string;
  content: string;
  fontColor: string;
  fontType: string;
  textSize: string;
  timestamp: firebase.default.firestore.Timestamp;
  title?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public FirestoreRec!: JournalDoc[];

  public backColor = "";
  public content = "";
  public fontColor = "";
  public fontType = "";
  public textSize = "";
  public title = "";

  constructor(private db: AngularFirestore, private AuthService: AuthService) {
    db.collection<JournalDoc>('/journalContent').valueChanges().subscribe(result => {
      if (result) {
        this.FirestoreRec = result;
      }
    })
  }
  async add() {
    const res = await this.db.collection('/journalContent').add({
      backColor: this.backColor, content: this.content, fontColor: this.content, fontType: this.fontType, textSize: this.textSize, timestamp: new Date(), title: this.title
    });
  }

}



