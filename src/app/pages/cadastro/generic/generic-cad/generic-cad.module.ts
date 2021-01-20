import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericCadPageRoutingModule } from './generic-cad-routing.module';

import { GenericCadPage } from './generic-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericCadPageRoutingModule,
    
  ],
  declarations: [GenericCadPage]
})
export class GenericCadPageModule {}
