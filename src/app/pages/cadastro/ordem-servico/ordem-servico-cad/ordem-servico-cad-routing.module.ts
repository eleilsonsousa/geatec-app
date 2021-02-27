import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemServicoCadPage } from './ordem-servico-cad.page';



const routes: Routes = [
    {

        path: "",
        component: OrdemServicoCadPage,
        children: [
            {
                path: "ordem-servico-cad-cabecalho",
                children: [
                    {
                        path: "",
                        loadChildren: () => import('./order-servico-cad-cabecalho/order-servico-cad-cabecalho.module').then(m => m.OrderServicoCadCabecalhoPageModule)
                    },
                ],


            },

         
        ]
    },

    {
        path: "",
        redirectTo: "cadastro-cliente/tab-pessoa-fisica",
        pathMatch: "full"
    }
];


/* const routes: Routes = [
  {
    path: '',
    component: OrdemServicoCadPage
  },
  {
    path: 'order-servico-cad-cabecalho',
    loadChildren: () => import('./order-servico-cad-cabecalho/order-servico-cad-cabecalho.module').then( m => m.OrderServicoCadCabecalhoPageModule)
  }
];
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdemServicoCadPageRoutingModule { }
