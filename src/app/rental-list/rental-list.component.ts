import { Component, OnInit, OnDestroy } from '@angular/core';

import { RentalService } from './rental.service';
import { Rental } from './rental';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals$: Observable<Rental[]>;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
  this.rentals$ = this.rentalService.getRentals();
  }
}
