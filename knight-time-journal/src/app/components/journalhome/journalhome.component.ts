import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

/**
 * JournalDoc defines format for firebase
 * entry for each journal entry 
 */
interface JournalDoc {
  backColor: string;
  content: string;
  fontColor: string;
  fontType: string;
  textSize: string;
  timestamp: firebase.default.firestore.Timestamp;
  userEmail: string;
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
  public userEmail = '';

  /**
   * fonts defines the set
   * of fonts users can select
   * from sidebar styling menu
   */
  public fonts = {
    timenew: 'Times New Roman',
    arial: 'Arial',
    georgia: 'Georgia, sans-serif',
  };

  /**
   * confirmation allows toggling
   * for displaying either:
   * - Save 
   * or 
   * - Confirm Save
   * - Cancel
   */
  public confirmation = {
    show: 'inline',
    hide: 'none',
  };
  public chosenFont = "";
  public confirm = "none";
  public noSave = "block";
  public bgColor = localStorage.getItem('bg-color') || '';
  public activeText = localStorage.getItem('activeText') || '';

  @Input() entry: string | undefined;
  @Input() title: string | undefined;

  /**
   * setColor() 
   * @returns color selected from
   * colorpicker as the entry bg color
   */
  setColor() {
    localStorage.setItem('bg-color', 'this.bg-color');
    console.log(localStorage.getItem('bg-color'));
  }

  /**
   * setTextColor() 
   * @returns color selected from
   * colorpicker as the entry text color
   */
  setTextColor() {
    localStorage.setItem('activeText', 'this.activeText');
    console.log(localStorage.getItem('activeText'));
  }

  /**
   * setFont1, setFont2, & setFont3
   * allow users to change font to:
   * - Times New Roman
   * - Arial 
   * - Georgia 
   * respectively 
   */
  setFont1() {
    this.chosenFont = this.fonts.timenew;
  }
  setFont2() {
    this.chosenFont = this.fonts.arial;
  }
  setFont3() {
    this.chosenFont = this.fonts.georgia;
  }

  /**
   * confirmSave()
   * hides Save button,
   * shows Confirm Save and Cancel buttons
   * (as delete is not provided)
   */
  confirmSave() {
    this.confirm = this.confirmation.show;
    this.noSave = this.confirmation.hide;
  }

  /** cancelSave()
   * cancels "confirmSave()", 
   * hides Confirm Safe & Cancel buttons,
   * shows Save button
   */
  cancelSave() {
    this.confirm = this.confirmation.hide;
    this.noSave = this.confirmation.show;
  }

  /**
   * constructor()
   * Subscribes to DB 
   * Takes DB contents & orders
   */
  constructor(private db: AngularFirestore, private authService: AuthService) {
    db.collection<JournalDoc>('/journalContent', ref => ref.orderBy("timestamp", "desc")).valueChanges().subscribe(result => {
      if (result) {
        this.FirestoreRec = result;
      }
    })
  }

  /**
   * add() 
   * @returns adds entry to firebase with
   * - backColor  being background color
   * - content    being user's text
   * - fontColor  being text color
   * - fontType   being font (e.g. Arial)
   * - textSize   being size of text for this entry 
   * - timestamp  being time saved
   * - title      being title of entry 
   * - userEmail  being account email to save entry to 
   * 
   *  also clears textareas for next journal entry 
   */
  async add() {
    const result = await this.db.collection('/journalContent').add({
      backColor: this.bgColor, content: this.entry, fontColor: this.activeText, fontType: this.chosenFont, textSize: this.textSize, timestamp: new Date(), title: this.title, userEmail: this.email
    }
    );
    this.entry = "";
    this.title = "";
    this.confirm = "none";
    this.noSave = "block";
  }

  ngOnInit(): void {
  }

  /**
   * logOut 
   * logs user out, 
   * bringing them to login page
   */
  logOut() {
    this.authService.logoutUser()
  }
  public email = this.authService.getCurrentUser();

  /**
   * sliderChanged()
   * updates textSize to value in 
   * style changes sidebar 
   */
  sliderChanged(event: any) {
    this.textSize = event.value + 'px';
  }
}


