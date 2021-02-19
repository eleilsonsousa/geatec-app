import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoCadPage } from './servico-cad.page';

const routes: Routes = [
  {
    path: '',
    component: ServicoCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoCadPageRoutingModule {}
