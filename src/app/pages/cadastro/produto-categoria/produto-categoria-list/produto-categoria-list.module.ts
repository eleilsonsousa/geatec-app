import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoCategoriaListPageRoutingModule } from './produto-categoria-list-routing.module';

import { ProdutoCategoriaListPage } from './produto-categoria-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoCategoriaListPageRoutingModule
  ],
  declarations: [ProdutoCategoriaListPage]
})
export class ProdutoCategoriaListPageModule {}
