import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Define interface for your expected response
export interface DashboardData {
  billing: any;
  referenceData: any;
  userData: any;
  dodMetrics: any[];
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private mockDataSubject = new BehaviorSubject<DashboardData | null>(null);
  mockData$: Observable<DashboardData | null> = this.mockDataSubject.asObservable();
  private loaded = false;

  constructor(private http: HttpClient) {}

  getMockData(): Observable<DashboardData | null> {
    if (!this.loaded) {
      this.http
        .get<DashboardData>('https://mocki.io/v1/6859b796-9912-44b8-993f-d66f5571f6be')
        .pipe(
          tap((data) => {
            console.log('Mock API Response:', data);
            this.mockDataSubject.next(data);
            this.loaded = true;
          })
        )
        .subscribe();
    }

    return this.mockData$;
  }

  clearMockData() {
    this.loaded = false;
    this.mockDataSubject.next(null);
  }
}
