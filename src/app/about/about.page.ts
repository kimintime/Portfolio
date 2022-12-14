import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/kimberly-ruohio-1200/")
  }

  openPdf() {
    window.open("./assets/CV.PDF")
  }

  constructor() { }

  ngOnInit() {
  }

}
