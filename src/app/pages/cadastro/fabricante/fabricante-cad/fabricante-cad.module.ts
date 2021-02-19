import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricanteCadPageRoutingModule } from './fabricante-cad-routing.module';

import { FabricanteCadPage } from './fabricante-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabricanteCadPageRoutingModule
  ],
  declarations: [FabricanteCadPage]
})
export class FabricanteCadPageModule {}
