import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmarealiaPage } from './omarealia.page';

const routes: Routes = [
  {
    path: '',
    component: OmarealiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmarealiaPageRoutingModule {}
