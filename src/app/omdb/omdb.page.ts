import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omdb',
  templateUrl: './omdb.page.html',
  styleUrls: ['./omdb.page.scss'],
})
export class OmdbPage implements OnInit {

  constructor() { }

  openOmdb() {
    window.open('https://github.com/kimintime/OMDB');
  }

  openApp() {
    window.open('https://omdbmoviesearch.netlify.app');
  }

  ngOnInit() {
  }

}
