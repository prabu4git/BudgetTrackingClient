import { Component, OnInit } from '@angular/core';
import { TrackingServiceService } from '../_service/tracking-service.service';

@Component({
  selector: 'app-budget-tracking',
  templateUrl: './budget-tracking.component.html',
  styleUrls: ['./budget-tracking.component.css']
})
export class BudgetTrackingComponent implements OnInit {

  constructor(private trackingService: TrackingServiceService) { }

  ngOnInit() {
      alert('heelo');
      this.trackingService.showExpenses().subscribe((data)=>{
        console.log(data);
      });
    }

}
