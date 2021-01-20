import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeCadPageRoutingModule } from './unidade-cad-routing.module';

import { UnidadeCadPage } from './unidade-cad.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadeCadPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
    
    
  ],
  declarations: [UnidadeCadPage]
})
export class UnidadeCadPageModule {}
