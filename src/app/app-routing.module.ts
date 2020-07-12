import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RentalPropertiesComponent } from './rentalproperties/rentalproperties.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rentalproperties', component: RentalPropertiesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
