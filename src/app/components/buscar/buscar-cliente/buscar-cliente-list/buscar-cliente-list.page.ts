import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entity/Cliente';
import { GenericListPage } from 'src/app/pages/cadastro/generic/generic-list/generic-list.page';
import { BuscarClienteComponent } from '../buscar-cliente.component';

@Component({
    selector: 'app-buscar-cliente-list',
    templateUrl: './buscar-cliente-list.page.html'
})
export class BuscarClienteListPage extends GenericListPage implements OnInit {


    public clienteSelected;

    ngOnInit() { }

    ionViewWillEnter() {
        this.isShowSearch = false;
        if (this.entities.length <= 0) {
            this.buscarTodos();
        }
    }

    buscarTodos() {
        this.showLoading();
        this.clienteController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.refreshList();
            this.hideLoading();
            this.showPanelCad();
            this.inputSearch.setFocus();
        });
    }



    changeSearch(value) {
        this.searchStr = value;
        this.filter('cpf', 'cnpj', 'nome', 'razaoSocial');
        this.isShowBottomClose = this.searchStr.length > 0;
    }

    inicializeList() {
        this.entities = [];
        this.entitiesFiltradas = [];
        this.buscarTodos();
    }

    selecionar(entity: Cliente) {
        BuscarClienteComponent.clienteSelected = entity;
        this.navigateBack();
    }

}
