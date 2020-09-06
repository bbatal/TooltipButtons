import { Directive, Input, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { TooltipService } from './tooltip.service';


@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {
  // We can pass string
  @Input() tooltipTitle: string = '';
  private id: number;

  constructor(private tooltipService: TooltipService, private element: ElementRef) { }

  @HostListener('click')
  onclick(): void {
    this.id = Math.random();
    this.tooltipService.pushToComponent({ 
      id: this.id, 
      ref: this.element, 
      title: this.tooltipTitle 
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    const idx = this.tooltipService.components.findIndex((t) => { 
      return t.id === this.id; 
    });

    this.tooltipService.components.splice(idx, 1);
  }


  
}
