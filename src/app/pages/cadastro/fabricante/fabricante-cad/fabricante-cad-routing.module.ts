import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabricanteCadPage } from './fabricante-cad.page';

const routes: Routes = [
  {
    path: '',
    component: FabricanteCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricanteCadPageRoutingModule {}
