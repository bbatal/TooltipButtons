import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipsComponent } from './tooltips/tooltips.component';


const routes: Routes = [
  { path: "", component: TooltipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
