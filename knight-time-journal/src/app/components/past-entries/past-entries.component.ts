import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-past-entries',
  templateUrl: './past-entries.component.html',
  styleUrls: ['./past-entries.component.scss']
})
export class PastEntriesComponent implements OnInit {

  @Input() pastEntry: string | undefined;
  @Input() entryTitle: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
