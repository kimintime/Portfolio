import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmarealiaPageRoutingModule } from './omarealia-routing.module';

import { OmarealiaPage } from './omarealia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmarealiaPageRoutingModule
  ],
  declarations: [OmarealiaPage]
})
export class OmarealiaPageModule {}
