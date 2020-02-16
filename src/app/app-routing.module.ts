import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetTrackingComponent } from './budget-tracking/budget-tracking.component';
import { BudgetHomeComponent } from './budget-home/budget-home.component';

const routes: Routes = [
  { path: '', component: BudgetHomeComponent },
  { path: 'budget-track', component: BudgetTrackingComponent}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
