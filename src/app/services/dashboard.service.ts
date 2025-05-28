import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  // Login and save token
  login(): Observable<any> {
  const body = {
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30
  };

  return this.http.post('https://dummyjson.com/auth/login', body, {
    headers: { 'Content-Type': 'application/json' }
  }).pipe(
    tap((res: any) => {
      this.token = res.accessToken;
      localStorage.setItem('authToken', this.token);
      console.log('Access Token:', this.token);
    })
  );
}


  // Fetch mock data using Bearer token
  getMockData(): Observable<any> {
    const token = this.token || localStorage.getItem('authToken');
   

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const res$ = this.http.get('https://mocki.io/v1/6859b796-9912-44b8-993f-d66f5571f6be', { headers });

    // Log data on subscribe
    res$.subscribe(data => console.log('Mock API Response:', data));

    return res$;
  }
}
