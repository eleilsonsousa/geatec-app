import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarClienteListPage } from './buscar-cliente-list.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarClienteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarClienteListPageRoutingModule {}
