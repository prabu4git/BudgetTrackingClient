import { Component, OnInit } from '@angular/core';
import { TrackingServiceService } from '../_service/tracking-service.service';
import { Budget } from '../_models/budget.model';

@Component({
  selector: 'app-budget-tracking',
  templateUrl: './budget-tracking.component.html',
  styleUrls: ['./budget-tracking.component.css']
})
export class BudgetTrackingComponent implements OnInit {

  budget: Budget[];
  constructor(private trackingService: TrackingServiceService) { }

  ngOnInit() {

      this.trackingService.showExpenses().subscribe((data)=>{
          this.budget = data;
      });
    }

}
