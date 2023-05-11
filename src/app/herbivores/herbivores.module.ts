import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerbivoresPageRoutingModule } from './herbivores-routing.module';

import { HerbivoresPage } from './herbivores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerbivoresPageRoutingModule
  ],
  declarations: [HerbivoresPage]
})
export class HerbivoresPageModule {}
