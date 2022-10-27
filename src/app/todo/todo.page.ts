import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  openTodo() {
    window.open("https://github.com/kimintime/DontForget")
  }

  openApp() {
    window.open("https://kimintime.netlify.app")
  }

  constructor() { }

  ngOnInit() {
  }

}
