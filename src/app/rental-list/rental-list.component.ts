import { Component, OnInit, ViewChild } from '@angular/core';

import { RentalService } from './rental.service';
import { Rental } from './rental.model';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  showCardSection:boolean = false;
  showTableSection:boolean = true;
  displayedColumns: string[] = ['street', 'city', 'state', 'zip', 'bedrooms','baths', 'sqft', 'hasTenants'];

  dataSource = new MatTableDataSource<Rental>();
  rentals: Rental[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private RentalService: RentalService) { }
  
  ngOnInit(): void {
    this.RentalService.getRentals().subscribe(rental => {
      this.dataSource.data = rental;
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  toggleViews(){
    this.showCardSection = !this.showCardSection;
    this.showTableSection = !this.showTableSection;
  }
  doFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
