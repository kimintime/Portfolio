import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  constructor() { }

  openFullstack() {
    window.open('https://github.com/kimintime/fs13-FullStack-public');
  }

  openFullstackApp() {
    window.open('https://kitlibrary.netlify.app');
  }

  ngOnInit() {
  }

}
