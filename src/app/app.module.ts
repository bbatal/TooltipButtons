import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { FocusOutDirective } from './focus-out.directive';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContentComponent } from './tooltip-content/tooltip-content.component';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipsComponent,
    FocusOutDirective,
    TooltipDirective,
    TooltipContentComponent,
    TooltipContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
