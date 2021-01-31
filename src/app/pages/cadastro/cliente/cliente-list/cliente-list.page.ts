import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Cliente } from 'src/app/entity/Cliente';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.page.html'
})
export class ClienteListPage extends GenericListPage implements OnInit {


    ngOnInit() {

    }

    ionViewWillEnter() {
        if (this.entities.length == 0) {
            this.buscarTodos();
        } 
    }

    buscarTodos() {
        this.showLoading();
        this.clienteController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.hideLoading();
        });
    }

    novo() {
        this.navigate('cliente-cad');
    }

    async excluir(entity: Cliente) {
        const result = await this.messageController.showMessageConfirm('Confirma excluir esse registro?');
        if (!result) return;

        this.showLoading();
        this.clienteController.excluir(entity).subscribe(() => {
            const index = this.entities.indexOf(entity);
            this.removeItemLists(entity.id);
            this.hideLoading();
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
            this.entitiesFiltradas = [];
            return;
        }
        this.entitiesFiltradas = await this.filtrarItems();
    }

    getEntities() {
        if (this.entitiesFiltradas.length > 0) {
            return this.entitiesFiltradas;
        }
        return this.entities;
    }

    changeSearch(value) {
        this.searchStr = value;
        this.aplicarFiltrarItems();

        if (value) {
            this.isShowBottomClose = true;

        } else {
            this.isShowBottomClose = false;
        }
    }

    showSearchBar() {
        this.isShowSearch = true;
        this.setFocusSearch();
    }

    hideSearchBar() {
        this.isShowSearch = false;
        this.searchStr = null;
        this.aplicarFiltrarItems();
    }

    deleteSearch() {
        this.inputSearch.value = "";
        this.setFocusSearch();
    }

    setFocusSearch() {
        setTimeout(() => {
            this.inputSearch.setFocus();


        }, 600);

    }




}
