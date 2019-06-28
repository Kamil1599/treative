import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightComponent} from "./flight/flight.component";
import {TouristComponent} from "./tourist/tourist.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'flights', component: FlightComponent},
  {path: 'tourists', component: TouristComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
