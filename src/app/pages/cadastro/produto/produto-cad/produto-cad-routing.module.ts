import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoCadPage } from './produto-cad.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoCadPageRoutingModule {}
