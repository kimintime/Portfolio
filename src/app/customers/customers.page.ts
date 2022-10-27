import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  openCustomer() {
    window.open("https://github.com/kimintime/kitcustomerpug")
  }

  openApp() {
    window.open("http://kitcustomerpug.herokuapp.com")
  }

  constructor() { }

  ngOnInit() {
  }

}
