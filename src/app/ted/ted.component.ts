import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-ted',
  templateUrl: './ted.component.html',
  styleUrls: ['./ted.component.css']
})
export class TedComponent implements OnInit {
  billing: any;
  referenceData: any;
  userData: any;
  dodMetrics: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.login().subscribe(() => {
      this.dashboardService.getMockData().subscribe((data: any) => {
        this.billing = data.billing;
        this.referenceData = data.referenceData;
        this.userData = data.userData;
        this.dodMetrics = data.dodMetrics;
      });
    });
  }
}
