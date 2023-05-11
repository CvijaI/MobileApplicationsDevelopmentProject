import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarnivoresPage } from './carnivores.page';

const routes: Routes = [
  {
    path: '',
    component: CarnivoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarnivoresPageRoutingModule {}
