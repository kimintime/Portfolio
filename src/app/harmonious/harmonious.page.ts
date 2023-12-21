import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harmonious',
  templateUrl: './harmonious.page.html',
  styleUrls: ['./harmonious.page.scss'],
})
export class HarmoniousPage implements OnInit {

  constructor() { }

  openHarmonious() {
    window.open('https://github.com/kimintime/Harmonious_HR_taskmanager/tree/kim');
  }

  openHarmoniousApp() {
    window.open('https://harmonioushr.azurewebsites.net');
  }

  openHarmoniousYT() {
    window.open('https://youtu.be/CnMU3AfcVCA');
  }

  ngOnInit() {
  }

}
