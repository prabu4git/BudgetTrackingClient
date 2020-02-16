import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetTrackingComponent } from './budget-tracking/budget-tracking.component';
import { BudgetHomeComponent } from './budget-home/budget-home.component';
import { TrackingServiceService } from './_service/tracking-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTrackingComponent,
    BudgetHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TrackingServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
