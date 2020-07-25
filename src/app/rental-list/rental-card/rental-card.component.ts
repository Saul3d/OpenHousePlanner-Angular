import { Component, OnInit } from '@angular/core';

import { Rental } from '../rental';
import { RentalService } from '../rental.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})

export class RentalCardComponent implements OnInit {
  rentals$: Observable<Rental[]>;

  constructor(private RentalService: RentalService) { }

  ngOnInit(): void {
    this.rentals$ = this.RentalService.getRentals();
  }

}
