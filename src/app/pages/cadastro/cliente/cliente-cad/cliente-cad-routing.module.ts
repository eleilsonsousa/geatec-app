import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCadPage } from './cliente-cad.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCadPageRoutingModule {}
