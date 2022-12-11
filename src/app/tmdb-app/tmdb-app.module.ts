import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmdbAppPageRoutingModule } from './tmdb-app-routing.module';

import { TmdbAppPage } from './tmdb-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmdbAppPageRoutingModule
  ],
  declarations: [TmdbAppPage]
})
export class TmdbAppPageModule {}
