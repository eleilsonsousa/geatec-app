import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoCategoriaCadPage } from './produto-categoria-cad.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCategoriaCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoCategoriaCadPageRoutingModule {}
