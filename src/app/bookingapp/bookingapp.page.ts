import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingapp',
  templateUrl: './bookingapp.page.html',
  styleUrls: ['./bookingapp.page.scss'],
})
export class BookingappPage implements OnInit {

  constructor() { }

  openBooking() {
    window.open('https://github.com/kimintime/MDS_Group9-Booking-App');
  }

  openBookingApp() {
    window.open('/assets/BookingApp.mp4');
  }

  ngOnInit() {
  }

}
