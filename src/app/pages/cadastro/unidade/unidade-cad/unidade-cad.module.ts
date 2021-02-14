import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeCadPageRoutingModule } from './unidade-cad-routing.module';

import { UnidadeCadPage } from './unidade-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadeCadPageRoutingModule
  ],
  declarations: [UnidadeCadPage]
})
export class UnidadeCadPageModule {}
