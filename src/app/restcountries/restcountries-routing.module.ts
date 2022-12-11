import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestcountriesPage } from './restcountries.page';

const routes: Routes = [
  {
    path: '',
    component: RestcountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestcountriesPageRoutingModule {}
