import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerbivoresPage } from './herbivores.page';

const routes: Routes = [
  {
    path: '',
    component: HerbivoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerbivoresPageRoutingModule {}
