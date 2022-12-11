import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmdb-app',
  templateUrl: './tmdb-app.page.html',
  styleUrls: ['./tmdb-app.page.scss'],
})
export class TmdbAppPage implements OnInit {

  openTMDB() {
    window.open("https://github.com/kimintime/tmdb-project")
  }

  openMovie() {
    window.open("/assets/omdb.mov")
  }

  constructor() { }

  ngOnInit() {
  }

}
