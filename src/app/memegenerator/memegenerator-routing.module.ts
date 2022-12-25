import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemegeneratorPage } from './memegenerator.page';

const routes: Routes = [
  {
    path: '',
    component: MemegeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemegeneratorPageRoutingModule {}
