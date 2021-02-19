import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Fabricante } from 'src/app/entity/Fabricante';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-fabricante-list',
    templateUrl: './fabricante-list.page.html'
})
export class FabricanteListPage extends GenericListPage implements OnInit {


    ngOnInit() { }

    ionViewWillEnter() {
        this.isShowSearch = false;
        if (this.entities.length <= 0) {
            this.buscarTodos();
        }
    }

    novo() {
        this.navigate('fabricante-cad');
    }

    buscarTodos() {
        this.showLoading();
        this.fabricanteController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.refreshList();
            this.hideLoading();
            this.showPanelCad();
        });
    }

    async excluir(entity: Fabricante) {
        const result = await this.messageController.showMessageConfirm(this.messages.dialogs_register_delete_confirmation);
        if (!result) return;

        this.showLoading();
        this.fabricanteController.excluir(entity).subscribe(() => {
            this.removeItemLists(entity.id);
            this.messageController.showMessageToast(this.messages.dialogs_register_delete);
            this.hideLoading();
            this.showPanelCad();
        })
    }

    async alterar(entity: Fabricante) {
        this.showLoading();
        const index = this.entities.indexOf(entity);

        this.fabricanteController.buscarPorId(entity.id).subscribe((result: any) => {
            if (result.length > 0) {
                entity = result[0];
                super.navigatePostParams('fabricante-cad', entity, index);
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
        this.filter('nome', 'sigla', null, null);
        this.isShowBottomClose = this.searchStr.length > 0;
    }

    inicializeList() {
        this.entities = [];
        this.entitiesFiltradas = [];
        this.buscarTodos();
    }

}
