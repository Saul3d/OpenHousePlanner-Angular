import { Component, OnInit } from '@angular/core';

import {NavbarComponent} from '../navbar/navbar.component';
import { FeatureComponent } from '../feature/feature.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
