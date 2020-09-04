import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { FocusOutDirective } from './focus-out.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipsComponent,
    FocusOutDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
