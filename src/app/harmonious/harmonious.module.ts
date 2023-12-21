import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarmoniousPageRoutingModule } from './harmonious-routing.module';

import { HarmoniousPage } from './harmonious.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarmoniousPageRoutingModule
  ],
  declarations: [HarmoniousPage]
})
export class HarmoniousPageModule {}
