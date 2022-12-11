import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestcountriesPageRoutingModule } from './restcountries-routing.module';

import { RestcountriesPage } from './restcountries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestcountriesPageRoutingModule
  ],
  declarations: [RestcountriesPage]
})
export class RestcountriesPageModule {}
