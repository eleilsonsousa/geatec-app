import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderServicoCadCabecalhoPageRoutingModule } from './order-servico-cad-cabecalho-routing.module';

import { OrderServicoCadCabecalhoPage } from './order-servico-cad-cabecalho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderServicoCadCabecalhoPageRoutingModule
  ],
  declarations: [OrderServicoCadCabecalhoPage]
})
export class OrderServicoCadCabecalhoPageModule {}
