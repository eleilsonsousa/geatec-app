import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderServicoCadCabecalhoPageRoutingModule } from './order-servico-cad-cabecalho-routing.module';

import { OrderServicoCadCabecalhoPage } from './order-servico-cad-cabecalho.page';
import { BuscarClienteComponent } from 'src/app/components/buscar/buscar-cliente/buscar-cliente.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderServicoCadCabecalhoPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [OrderServicoCadCabecalhoPage,
        BuscarClienteComponent]
})
export class OrderServicoCadCabecalhoPageModule { }
