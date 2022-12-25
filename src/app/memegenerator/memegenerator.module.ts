import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemegeneratorPageRoutingModule } from './memegenerator-routing.module';

import { MemegeneratorPage } from './memegenerator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemegeneratorPageRoutingModule
  ],
  declarations: [MemegeneratorPage]
})
export class MemegeneratorPageModule {}
