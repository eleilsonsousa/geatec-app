import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeListPageRoutingModule } from './unidade-list-routing.module';

import { UnidadeListPage } from './unidade-list.page';

import {OrderListModule} from 'primeng/orderlist';
import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadeListPageRoutingModule,
    OrderListModule,
    TableModule,
    
    
  ],
  declarations: [UnidadeListPage],
  schemas:
        [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnidadeListPageModule {}
