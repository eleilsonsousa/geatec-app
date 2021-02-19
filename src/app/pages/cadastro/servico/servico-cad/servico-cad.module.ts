import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoCadPageRoutingModule } from './servico-cad-routing.module';

import { ServicoCadPage } from './servico-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoCadPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ServicoCadPage]
})
export class ServicoCadPageModule {}
