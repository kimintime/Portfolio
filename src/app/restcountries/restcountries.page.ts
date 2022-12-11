import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restcountries',
  templateUrl: './restcountries.page.html',
  styleUrls: ['./restcountries.page.scss'],
})
export class RestcountriesPage implements OnInit {

  openRestcountries() {
    window.open("https://github.com/kimintime/fs13-JavaScript-public")
  }

  openCountrySearch() {
    window.open("https://kitrestcountries.netlify.app")
  }


  constructor() { }

  ngOnInit() {
  }

}
