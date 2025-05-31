import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Define interface for your expected data structure
export interface TedData {
  billing: any;
  referenceData: any;
  userData: any;
  dodMetrics: any[];
}

@Injectable({
  providedIn: 'root',
})
export class TedService {
  private tedDataSubject = new BehaviorSubject<TedData | null>(null);
  tedData$: Observable<TedData | null> = this.tedDataSubject.asObservable();
  private loaded = false;

  constructor(private http: HttpClient) {}

  getTedData(): Observable<TedData | null> {
    if (!this.loaded) {
      this.http
        .get<TedData>('assets/mock-data.json')
        .pipe(
          tap((data) => {
            console.log('TED Mock Data Loaded:', data);
            this.tedDataSubject.next(data);
            this.loaded = true;
          })
        )
        .subscribe();
    }

    return this.tedData$;
  }

  clearTedData() {
    this.loaded = false;
    this.tedDataSubject.next(null);
  }
}
