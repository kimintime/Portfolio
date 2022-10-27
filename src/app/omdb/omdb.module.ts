import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmdbPageRoutingModule } from './omdb-routing.module';

import { OmdbPage } from './omdb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmdbPageRoutingModule
  ],
  declarations: [OmdbPage]
})
export class OmdbPageModule {}
