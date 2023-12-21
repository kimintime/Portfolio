import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarmoniousPage } from './harmonious.page';

const routes: Routes = [
  {
    path: '',
    component: HarmoniousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarmoniousPageRoutingModule {}
