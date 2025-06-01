import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { MOCK_TED_DATA } from '../Recon/clearance/ted/mock-data'; // adjust path
import { MOCK_TED_DATA } from '../ted/mock-data'; 
@Injectable({
    providedIn: 'root'
})
export class TedService {
    constructor() {}

    getTedData(): Observable<any> {
        return of(MOCK_TED_DATA);
    }
}
