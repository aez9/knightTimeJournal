import { Component, OnInit, Input } from '@angular/core';

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

  onSave(){

  }

}
