import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.scss']
})
export class TooltipContainerComponent implements OnInit {
components: any[];
  constructor(private tooltipservice: TooltipService) {
    this.components = tooltipservice.components;
   }

  ngOnInit() {
  }

}
