import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusOut]'
})
export class FocusOutDirective {
  @Output() onFocusOut: EventEmitter<boolean> = new EventEmitter<false>();
  constructor() { }

  @HostListener("focusout", ["$event"])
   public onListenerTriggered(event: any): void {
       this.onFocusOut.emit(true);
   }
}
