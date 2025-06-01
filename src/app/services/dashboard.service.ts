import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TedService {
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  // Login and save token
 

  // Fetch mock data using Bearer token
  getMockData(): Observable<any> {
 
    const res$ = this.http.get('https://mocki.io/v1/6859b796-9912-44b8-993f-d66f5571f6be');

    // Log data on subscribe
    res$.subscribe(data => console.log('Mock API Response:', data));

    return res$;
  }
}