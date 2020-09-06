import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss']
})
export class TooltipContentComponent implements AfterViewInit {

  @Input() title: string;
  @Input() ref: any;
  constructor() { }

  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    // update position based on `ref`
  }

}
