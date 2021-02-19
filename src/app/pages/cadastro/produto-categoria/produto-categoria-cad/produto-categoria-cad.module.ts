import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoCategoriaCadPageRoutingModule } from './produto-categoria-cad-routing.module';

import { ProdutoCategoriaCadPage } from './produto-categoria-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoCategoriaCadPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ProdutoCategoriaCadPage]
})
export class ProdutoCategoriaCadPageModule {}
