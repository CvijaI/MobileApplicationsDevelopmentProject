//importaint angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarnivoresPageRoutingModule } from './carnivores-routing.module';
import { CarnivoresPage } from './carnivores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnivoresPageRoutingModule
  ],
  declarations: [CarnivoresPage]
})
export class CarnivoresPageModule {}
