import { Component, OnInit } from '@angular/core';
import { TedService, TedData } from '../services/ted.service';

@Component({
  selector: 'app-ted',
  templateUrl: './ted.component.html',
  styleUrls: ['./ted.component.css']
})
export class TedComponent implements OnInit {
  billing: any = null;
  referenceData: any = null;
  userData: any = null;
  dodMetrics: any[] = [];

  constructor(private tedService: TedService) {}

  ngOnInit(): void {
    this.tedService.getTedData().subscribe((data: TedData | null) => {
      if (data) {
        this.billing = data.billing;
        this.referenceData = data.referenceData;
        this.userData = data.userData;
        this.dodMetrics = data.dodMetrics;
      } else {
        console.warn('No TED data received');
      }
    });
  }
}
