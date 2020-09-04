import { Component, OnInit, HostListener } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {
makeAppear1: boolean = true;
makeAppear2: boolean = true;
buttonOpacity1: number = 0;
buttonOpacity2: number = 0;
something;

  constructor() { }

@HostListener('window:keyup', ['$event'])
keyup(e) {
  if(e.code == 'Escape') {
    this.makeAppear1 = true;
    this.makeAppear2 = true;
    this.buttonOpacity1 = 0;
    this.buttonOpacity2 = 0;
  }
}


  ngOnInit() {
  }

  appearBox(event) {
    if(event === 1) {
      this.makeAppear1 = false;
      this.buttonOpacity1 = 1;
    } else {
      this.makeAppear2 = false;
      this.buttonOpacity2 = 1;
    }
  }

  myFunction(event, num) {
    if( num === 1 ) {
      this.makeAppear1 = true;
      this.buttonOpacity1 = 0;
    } else {
      this.makeAppear2 = true;
      this.buttonOpacity2 = 0;
    }
  }

}
