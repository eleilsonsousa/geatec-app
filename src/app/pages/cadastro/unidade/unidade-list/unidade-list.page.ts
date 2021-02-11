import { Component, OnInit } from '@angular/core';
import { Unidade } from 'src/app/entity/Unidade';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-unidade-list',
    templateUrl: './unidade-list.page.html'
})
export class UnidadeListPage extends GenericListPage implements OnInit {

    ngOnInit() {
        this.buscarTodos();
    }


    buscarTodos() {
        this.showLoading();
        this.unidadeController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.hideLoading();
        });
    }

    novo() {
        this.navigate('unidade-cad');
    }

    async excluir(entity: Unidade) {
        const result = await this.messageController.showMessageConfirm('Confirma excluir esse registro?');
        if (!result) return;

        this.showLoading();
        this.unidadeController.excluir(entity).subscribe(() => {
            const index = this.entities.indexOf(entity);
            this.removeItemLists(entity.id);
            this.hideLoading();
            this.messageController.showMessageToast('Excluído com sucesso');
        })
    }

    alterar(entity: Unidade) {
        const index = this.entities.indexOf(entity);
        super.navigatePostParams('unidade-cad', entity, index);
    }

    execFilter() { 
        return this.entities.filter(entity => {
            return entity.sigla.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 ||
                entity.nome.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1
        });
    }

    async filter() {
        if (!this.searchStr) {
            this.entitiesFiltradas = [];
            return;
        }
        this.entitiesFiltradas = await this.execFilter();
    }

    getEntities() {
        if (this.entitiesFiltradas.length > 0) {
            return this.entitiesFiltradas;
        }
        return this.entities;
    }



}
