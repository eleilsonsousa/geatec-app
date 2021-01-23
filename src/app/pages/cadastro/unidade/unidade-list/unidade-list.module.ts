import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeListPageRoutingModule } from './unidade-list-routing.module';

import { UnidadeListPage } from './unidade-list.page';

import {OrderListModule} from 'primeng/orderlist';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadeListPageRoutingModule,
    OrderListModule,
    
  ],
  declarations: [UnidadeListPage],
  schemas:
        [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnidadeListPageModule {}
