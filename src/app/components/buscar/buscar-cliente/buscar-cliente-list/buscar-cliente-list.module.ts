import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarClienteListPageRoutingModule } from './buscar-cliente-list-routing.module';

import { BuscarClienteListPage } from './buscar-cliente-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarClienteListPageRoutingModule
  ],
  declarations: [BuscarClienteListPage]
})
export class BuscarClienteListPageModule {}
