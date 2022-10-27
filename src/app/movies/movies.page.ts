import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  openTmdb() {
    window.open("https://github.com/kimintime/myMovieApp")
  }

  constructor() { }

  ngOnInit() {
  }

}
