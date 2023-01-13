import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.page.html',
  styleUrls: ['./frontend.page.scss'],
})
export class FrontendPage implements OnInit {

  openFrontend() {
    window.open("https://github.com/kimintime/fs13-frontend-project-public")
  }

  openFrontendApp() {
    window.open("https://kitshopping.netlify.app")
  }

  constructor() { }

  ngOnInit() {
  }

}
