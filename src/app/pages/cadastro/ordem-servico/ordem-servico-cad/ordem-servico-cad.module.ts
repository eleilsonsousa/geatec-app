import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdemServicoCadPageRoutingModule } from './ordem-servico-cad-routing.module';

import { OrdemServicoCadPage } from './ordem-servico-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemServicoCadPageRoutingModule
  ],
  declarations: [OrdemServicoCadPage]
})
export class OrdemServicoCadPageModule {}
