import { Component, OnInit, Input } from '@angular/core';

import { Rental } from '../rental.model';
import { RentalService } from '../rental.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})

export class RentalCardComponent implements OnInit {
  rentals$: Observable<Rental[]>;
  show:boolean = false;
   
  constructor(private RentalService: RentalService) { }

  ngOnInit(): void {
    this.rentals$ = this.RentalService.getRentals();
  }
}
