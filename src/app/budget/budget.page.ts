import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {

  openBudget() {
    window.open("https://github.com/kimintime/fs13-react-budget-public")
  }

  openBudgetApp() {
    window.open("https://kitbudgetapp.netlify.app")
  }

  constructor() { }

  ngOnInit() {
  }

}
