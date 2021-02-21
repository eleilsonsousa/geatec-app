import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Produto } from 'src/app/entity/Produto';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-produto-list',
    templateUrl: './produto-list.page.html'
})
export class ProdutoListPage extends GenericListPage implements OnInit {


    ngOnInit() { }

    ionViewWillEnter() {
        this.isShowSearch = false;
        if (this.entities.length <= 0) {
            this.buscarTodos();
        }
    }

    novo() {
        this.navigate('produto-cad');
    }

    buscarTodos() {
        this.showLoading();
        this.produtoController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.refreshList();
            this.hideLoading();
            this.showPanelCad();
        });
    }

    async excluir(entity: Produto) {
        const result = await this.messageController.showMessageConfirm(this.messages.dialogs_register_delete_confirmation);
        if (!result) return;

        this.showLoading();
        this.produtoController.excluir(entity).subscribe(() => {
            this.removeItemLists(entity.id);
            this.messageController.showMessageToast(this.messages.dialogs_register_delete);
            this.hideLoading();
            this.showPanelCad();
        })
    }

    async alterar(entity: Produto) {
        this.showLoading();
        const index = this.entities.indexOf(entity);

        this.produtoController.buscarPorId(entity.id).subscribe((result: any) => {
            if (result.length > 0) {
                entity = result[0];
                super.navigatePostParams('produto-cad', entity, index);
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
