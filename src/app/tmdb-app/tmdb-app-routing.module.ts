import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmdbAppPage } from './tmdb-app.page';

const routes: Routes = [
  {
    path: '',
    component: TmdbAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmdbAppPageRoutingModule {}
