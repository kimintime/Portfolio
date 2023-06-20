import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingappPageRoutingModule } from './bookingapp-routing.module';

import { BookingappPage } from './bookingapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingappPageRoutingModule
  ],
  declarations: [BookingappPage]
})
export class BookingappPageModule {}
