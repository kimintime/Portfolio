import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmdbPage } from './omdb.page';

const routes: Routes = [
  {
    path: '',
    component: OmdbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmdbPageRoutingModule {}
