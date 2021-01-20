import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericCadPage } from './generic-cad.page';

const routes: Routes = [
  {
    path: '',
    component: GenericCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericCadPageRoutingModule {}
