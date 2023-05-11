import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmnivoresPage } from './omnivores.page';

const routes: Routes = [
  {
    path: '',
    component: OmnivoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmnivoresPageRoutingModule {}
