import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricanteCadPageRoutingModule } from './fabricante-cad-routing.module';

import { FabricanteCadPage } from './fabricante-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabricanteCadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FabricanteCadPage]
})
export class FabricanteCadPageModule {}
