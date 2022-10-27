import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omdb',
  templateUrl: './omdb.page.html',
  styleUrls: ['./omdb.page.scss'],
})
export class OmdbPage implements OnInit {

  openOmdb() {
    window.open("https://github.com/kimintime/OMDB")
  }

  openApp() {
    window.open("https://omdbmoviesearch.netlify.app")
  }
  
  constructor() { }

  ngOnInit() {
  }

}
