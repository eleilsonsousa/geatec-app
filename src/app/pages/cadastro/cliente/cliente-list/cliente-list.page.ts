import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entity/Cliente';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.page.html'
})
export class ClienteListPage extends GenericListPage implements OnInit {


    ngOnInit() {
        this.buscarTodos();
    }

    buscarTodos() {
        return this.clienteController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            return result;
        });
    }

    novoCad() {
        this.navigate('cliente-cad');
    }

    async excluir(entity: Cliente) {
        const result = await this.messageController.showMessageConfirm('Confirma excluir esse registro?');
        if (!result) return;

        this.showLoading();
        this.clienteController.excluir(entity).subscribe(() => {
            this.removeItemLists(entity.id);
            this.messageController.showMessageToast('Excluído com sucesso');
        })
    }

    alterar(entity: Cliente) {
        const index = this.entities.indexOf(entity);
        super.navigatePostParams('cliente-cad', entity, index);
    }

    filtrarItems() {
        return this.entities.filter(entity => {
            return entity.nome.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 ||
                   entity.cpf.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 
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
