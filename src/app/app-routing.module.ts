import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-list',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'unidade-list',
    loadChildren: () => import('./pages/cadastro/unidade/unidade-list/unidade-list.module').then( m => m.UnidadeListPageModule)
  },
  {
    path: 'unidade-cad',
    loadChildren: () => import('./pages/cadastro/unidade/unidade-cad/unidade-cad.module').then( m => m.UnidadeCadPageModule)
  },
  {
    path: 'cliente-list',
    loadChildren: () => import('./pages/cadastro/cliente/cliente-list/cliente-list.module').then( m => m.ClienteListPageModule)
  },
  {
    path: 'menu-list',
    loadChildren: () => import('./pages/cadastro/menu/menu-list/menu-list.module').then( m => m.MenuListPageModule)
  },
  {
    path: 'cliente-cad',
    loadChildren: () => import('./pages/cadastro/cliente/cliente-cad/cliente-cad.module').then( m => m.ClienteCadPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
