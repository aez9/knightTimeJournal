import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-past-entries',
  templateUrl: './past-entries.component.html',
  styleUrls: ['./past-entries.component.scss']
})
/**
 * Recieving entry data from firebase
 */
export class PastEntriesComponent implements OnInit {
  @Input() pastEntry: string | undefined;
  @Input() entryTitle: string | undefined;
  @Input() backColor: string | undefined;
  @Input() fontColor: string | undefined;
  @Input() fontType: string | undefined;
  @Input() textSize: string | undefined;
  @Input() userEmail: string | undefined;
  @Input() timestamp: firebase.default.firestore.Timestamp | undefined;
  constructor() {
  }

  ngOnInit(): void { }
}
