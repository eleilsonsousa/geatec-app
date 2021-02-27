import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderServicoCadCabecalhoPage } from './order-servico-cad-cabecalho.page';

const routes: Routes = [
  {
    path: '',
    component: OrderServicoCadCabecalhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderServicoCadCabecalhoPageRoutingModule {}
