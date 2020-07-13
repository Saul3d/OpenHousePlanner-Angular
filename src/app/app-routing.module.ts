import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RentalListComponent } from './rental-list/rental-list.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rentalproperty', component: RentalListComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
