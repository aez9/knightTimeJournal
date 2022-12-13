import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '@angular/fire/auth';

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
  selector: 'app-journalhome',
  templateUrl: './journalhome.component.html',
  styleUrls: ['./journalhome.component.scss']
})
export class JournalhomeComponent implements OnInit {
  public FirestoreRec!: JournalDoc[];

  public backColor = "";
  public content = "";
  public fontColor = "";
  public fontType = "";
  public textSize = "";
  public title = "";


  public bgColor = localStorage.getItem('bg-color') || '';
  public activeText = localStorage.getItem('activeText') || '';


  setColor() {
    localStorage.setItem('bg-color', 'this.bg-color');
    console.log(localStorage.getItem('bg-color'));
  }
  setTextColor() {
    localStorage.setItem('activeText', 'this.activeText');
    console.log(localStorage.getItem('activeText'));
  }

  constructor(private db: AngularFirestore, private authService: AuthService) {
    db.collection<JournalDoc>('/journalContent').valueChanges().subscribe(result => {
      if (result) {
        this.FirestoreRec = result;
      }
    })
  }
  async add() {
    const result = await this.db.collection('/journalContent').add({
      backColor: this.backColor, content: this.content, fontColor: this.fontColor, fontType: this.fontType, textSize: this.textSize, timestamp: new Date(), title: this.title
    });
  }
  ngOnInit(): void {
  }
  logOut() {
    this.authService.logoutUser()
  }
}

