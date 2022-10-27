import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  openUserlist() {
    window.open("https://github.com/kimintime/useraccounts")
  }

  openApp() {
    window.open("https://kitintegrifytest.netlify.app")
  }


  constructor() { }

  ngOnInit() {
  }

}
