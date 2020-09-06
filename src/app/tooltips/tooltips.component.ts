import { Component, OnInit, HostListener, Directive, ViewChild, ElementRef, Inject } from '@angular/core';
import { debounce } from '../debounce';

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
welcomeText: string = "welcome to the party"
top: number = 0;


  constructor() { }

@ViewChild('box', {static: false}) box: ElementRef;
@ViewChild('box2', {static: false}) box2: ElementRef;

@HostListener('window:keyup', ['$event'])
keyup(e) {
  if(e.code == 'Escape') {
    this.makeAppear1 = true;
    this.makeAppear2 = true;
    this.buttonOpacity1 = 0;
    this.buttonOpacity2 = 0;
  }
}

@HostListener('window:scroll')
@debounce()
checkButton() {
  const Span = document.querySelectorAll('.tooltipText') as any as Array<HTMLBaseElement>;
  Span.forEach(tooltip => {
    const bounding = tooltip.getBoundingClientRect();
    console.log(bounding)
  if (bounding.top > 180) {
      this.box.nativeElement.classList.remove('top')
      this.box.nativeElement.classList.add('mini-box');

      this.box2.nativeElement.classList.remove('top')
      this.box2.nativeElement.classList.add('mini-box');
} else if(bounding.top < 0) {
      this.box.nativeElement.classList.remove('mini-box')
      this.box.nativeElement.classList.add('top');

      this.box2.nativeElement.classList.remove('mini-box')
      this.box2.nativeElement.classList.add('top');
    }
  })
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
