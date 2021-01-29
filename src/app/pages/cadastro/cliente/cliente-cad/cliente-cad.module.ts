import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteCadPageRoutingModule } from './cliente-cad-routing.module';

import { ClienteCadPage } from './cliente-cad.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteCadPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
  ],
  declarations: [ClienteCadPage]
})
export class ClienteCadPageModule {}
