import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoCategoriaListPage } from './produto-categoria-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCategoriaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoCategoriaListPageRoutingModule {}
