import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingappPage } from './bookingapp.page';

const routes: Routes = [
  {
    path: '',
    component: BookingappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingappPageRoutingModule {}
