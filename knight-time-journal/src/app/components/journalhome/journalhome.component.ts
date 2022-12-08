import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journalhome',
  templateUrl: './journalhome.component.html',
  styleUrls: ['./journalhome.component.scss']
})
export class JournalhomeComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}

