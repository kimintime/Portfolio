import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  constructor() { }

  openPortfolioApp() {
    window.open('https://github.com/kimintime/Portfolio');
  }

  ngOnInit() {
  }

}
