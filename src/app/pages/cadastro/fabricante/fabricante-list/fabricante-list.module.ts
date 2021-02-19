import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricanteListPageRoutingModule } from './fabricante-list-routing.module';

import { FabricanteListPage } from './fabricante-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabricanteListPageRoutingModule
  ],
  declarations: [FabricanteListPage]
})
export class FabricanteListPageModule {}
