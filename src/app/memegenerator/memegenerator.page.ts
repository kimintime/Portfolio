import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memegenerator',
  templateUrl: './memegenerator.page.html',
  styleUrls: ['./memegenerator.page.scss'],
})
export class MemegeneratorPage implements OnInit {

  openMeme() {
    window.open("https://github.com/kimintime/memegenerator")
  }

  openMemegen() {
    window.open("https://kitmemegenerator.netlify.app")
  }

  constructor() { }

  ngOnInit() {
  }

}
