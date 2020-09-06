import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  components: any[] = [];
  constructor() {
   }

   pushToComponent(item) {
     this.components.push(item);
   }
}
