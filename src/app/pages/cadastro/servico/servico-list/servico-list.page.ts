import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Servico } from 'src/app/entity/Servico';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-servico-list',
    templateUrl: './servico-list.page.html'
})
export class ServicoListPage extends GenericListPage implements OnInit {


    ngOnInit() { }

    ionViewWillEnter() {
        this.isShowSearch = false;
        if (this.entities.length <= 0) {
            this.buscarTodos();
        }
    }

    novo() {
        this.navigate('servico-cad');
    }

    buscarTodos() {
        this.showLoading();
        this.servicoController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.refreshList();
            this.hideLoading();
            this.showPanelCad();
        });
    }

    async excluir(entity: Servico) {
        const result = await this.messageController.showMessageConfirm(this.messages.dialogs_register_delete_confirmation);
        if (!result) return;

        this.showLoading();
        this.servicoController.excluir(entity).subscribe(() => {
            this.removeItemLists(entity.id);
            this.messageController.showMessageToast(this.messages.dialogs_register_delete);
            this.hideLoading();
            this.showPanelCad();
        })
    }

    async alterar(entity: Servico) {
        this.showLoading();
        const index = this.entities.indexOf(entity);

        this.servicoController.buscarPorId(entity.id).subscribe((result: any) => {
            if (result.length > 0) {
                entity = result[0];
                super.navigatePostParams('servico-cad', entity, index);
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
        this.filter('nome', null, null, null);
        this.isShowBottomClose = this.searchStr.length > 0;
    }

    inicializeList() {
        this.entities = [];
        this.entitiesFiltradas = [];
        this.buscarTodos();
    }

}
