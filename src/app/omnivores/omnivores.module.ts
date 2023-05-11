import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmnivoresPageRoutingModule } from './omnivores-routing.module';

import { OmnivoresPage } from './omnivores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmnivoresPageRoutingModule
  ],
  declarations: [OmnivoresPage]
})
export class OmnivoresPageModule {}
