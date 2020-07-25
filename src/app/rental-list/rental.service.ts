import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap }  from 'rxjs/operators';

import { Rental } from './rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentalUrl = 'http://localhost:50860/api/rentalProperty';
  static getRentals: any;
  
  constructor( private http: HttpClient) {}

  getRentals(): Observable<Rental[]>{
    return this.http.get<Rental[]>(this.rentalUrl)
    .pipe(
      tap(data => console.log('Rentals:', JSON.stringify(data)))
    )
  }
  
}
