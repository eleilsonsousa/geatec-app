import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeCadPageRoutingModule } from './unidade-cad-routing.module';

import { UnidadeCadPage } from './unidade-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadeCadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UnidadeCadPage]
})
export class UnidadeCadPageModule {}
