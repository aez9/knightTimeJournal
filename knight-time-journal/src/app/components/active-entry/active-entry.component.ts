import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-entry',
  templateUrl: './active-entry.component.html',
  styleUrls: ['./active-entry.component.scss']
})
export class ActiveEntryComponent implements OnInit {

  @Input() entry: string | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() result: EventEmitter<string> = new EventEmitter<string>();

  onSave() {
    this.result.emit(this.entry);
  }

}
