import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '@angular/fire/auth';
import { LoginComponent } from '../login/login.component';
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
  public textSize = '';
  public timestamp!: firebase.default.firestore.Timestamp;
 
  public fonts = {
    timenew: 'Times New Roman',
    arial: 'Arial',
    sans: 'sans-serif',
  };

  public chosenFont = "";
  
  public bgColor = localStorage.getItem('bg-color') || '';
  public activeText = localStorage.getItem('activeText') || '';
  
  @Input() entry: string | undefined;
  @Input() title: string | undefined;

  setColor() {
    localStorage.setItem('bg-color', 'this.bg-color');
    console.log(localStorage.getItem('bg-color'));
  }
  setTextColor() {
    localStorage.setItem('activeText', 'this.activeText');
    console.log(localStorage.getItem('activeText'));
  }
  setFont1() {
    this.chosenFont = this.fonts.timenew;
  }
  setFont2() {
    this.chosenFont = this.fonts.arial;
  }
  setFont3() {
    this.chosenFont = this.fonts.sans;
  }
  constructor(private db: AngularFirestore, private authService: AuthService) {
    db.collection<JournalDoc>('/journalContent', ref=>ref.orderBy("timestamp")).valueChanges().subscribe(result => {
      if (result) {
        this.FirestoreRec = result;
      }
    })
  }
  async add() {
    const result = await this.db.collection('/journalContent').add({
      backColor: this.bgColor, content: this.entry, fontColor: this.activeText, fontType: this.chosenFont, textSize: this.textSize, timestamp: new Date(), title: this.title
    });
  }
  ngOnInit(): void {
  }
  logOut() {
    this.authService.logoutUser()
  }
  public email = this.authService.getCurrentUser();

  sliderChanged(event: any) {
    this.textSize = event.value + 'px';
    console.log(this.textSize)
  }
}


