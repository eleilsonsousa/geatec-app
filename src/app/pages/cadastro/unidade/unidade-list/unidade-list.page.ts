import { Component, OnInit } from '@angular/core';
import { Unidade } from 'src/app/entity/Unidade';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-unidade-list',
    templateUrl: './unidade-list.page.html'
})
export class UnidadeListPage extends  GenericListPage  {

    ionViewWillEnter() {
       this.buscarTodos();
     }

    buscarTodos() {
        return this.unidadeController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            return result;
        });
    }

    novoCad() {
        this.navigate('unidade-cad');
    }

    async excluir(entity: Unidade) {
        const result = await this.messageController.showMessageConfirm('Confirma excluir esse registro?');
        if (!result) return;

        this.showLoading();
        this.unidadeController.excluir(entity).subscribe(() => {
            this.messageController.showMessageToast('Excluído com sucesso');
            this.buscarTodos();
        })
    }

    alterar(entity: Unidade) {
        const index = this.entities.indexOf(entity);
        super.navigatePostParams('unidade-cad', entity, index);
    }

    filtrarItems() {
        return this.entities.filter(entity => {
            return entity.sigla.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 ||
                   entity.nome.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 
        });
    }

    async aplicarFiltrarItems() {
        if (!this.searchStr) {
            this.entitiesFiltradas = null;
            return;
        }
        this.entitiesFiltradas = await this.filtrarItems();       
    }

    getEntities() {
        if (this.entitiesFiltradas != null) {
            return this.entitiesFiltradas;
        } else {
            return this.entities;
        }
    }

   

}
