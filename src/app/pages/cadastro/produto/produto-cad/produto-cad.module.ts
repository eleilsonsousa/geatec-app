import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoCadPageRoutingModule } from './produto-cad-routing.module';

import { ProdutoCadPage } from './produto-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoCadPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ProdutoCadPage]
})
export class ProdutoCadPageModule {}
