import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.page.html',
  styleUrls: ['./storefront.page.scss'],
})
export class StorefrontPage implements OnInit {

  constructor() { }

  openStorefront() {
    window.open('https://github.com/kimintime/fs13-CSS-website-public');
  }

  openSite() {
    window.open('https://kimintime.github.io/fs13-CSS-website-public/');
  }

  ngOnInit() {
  }

}
