import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Cliente } from 'src/app/entity/Cliente';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.page.html'
})
export class ClienteListPage extends GenericListPage implements OnInit {


    ngOnInit() { }

    ionViewWillEnter() {
        this.isShowSearch = false;
        if (this.entities.length <= 0) {
            this.buscarTodos();
        }
    }

    novo() {
        this.navigate('cliente-cad');
    }

    buscarTodos() {
        this.showLoading();
        this.clienteController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.refreshList();
            this.hideLoading();
            this.showPanelCad();
        });
    }

    async excluir(entity: Cliente) {
        const result = await this.messageController.showMessageConfirm(this.messages.dialogs_register_delete_confirmation);
        if (!result) return;

        this.showLoading();
        this.clienteController.excluir(entity).subscribe(() => {
            this.removeItemLists(entity.id);
            this.messageController.showMessageToast(this.messages.dialogs_register_delete);
            this.hideLoading();
            this.showPanelCad();
        })
    }

    async alterar(entity: Cliente) {
        this.showLoading();
        const index = this.entities.indexOf(entity);

        this.clienteController.buscarPorId(entity.id).subscribe((result: any) => {
            if (result.length > 0) {
                entity = result[0];
                super.navigatePostParams('cliente-cad', entity, index);
                this.hideLoading();
            } else {
                this.messageController.showMessageToast(this.messages.dialogs_register_no_exists);
                this.refreshList();
                this.hideLoading();
            }
        })
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

}
