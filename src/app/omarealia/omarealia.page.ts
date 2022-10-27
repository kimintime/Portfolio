import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omarealia',
  templateUrl: './omarealia.page.html',
  styleUrls: ['./omarealia.page.scss'],
})
export class OmarealiaPage implements OnInit {

  openOmarealia() {
    window.open("https://github.com/kimintime/omarealia")
  }

  openBlog() {
    window.open("https://kimintime.github.io/omarealia/")
  }

  constructor() { }

  ngOnInit() {
  }

}
