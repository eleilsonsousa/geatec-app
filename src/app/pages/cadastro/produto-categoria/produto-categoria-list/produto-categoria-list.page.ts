import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { ProdutoCategoria } from 'src/app/entity/ProdutoCategoria';
import { GenericListPage } from '../../generic/generic-list/generic-list.page';

@Component({
    selector: 'app-produto-categoria-list',
    templateUrl: './produto-categoria-list.page.html'
})
export class ProdutoCategoriaListPage extends GenericListPage implements OnInit {


    ngOnInit() { }

    ionViewWillEnter() {
        this.isShowSearch = false;
        if (this.entities.length <= 0) {
            this.buscarTodos();
        }
    }

    novo() {
        this.navigate('produto-categoria-cad');
    }

    buscarTodos() {
        this.showLoading();
        this.produtoCategoriaController.buscarTodos().subscribe((result: any) => {
            this.entities = result;
            this.refreshList();
            this.hideLoading();
            this.showPanelCad();
        });
    }

    async excluir(entity: ProdutoCategoria) {
        const result = await this.messageController.showMessageConfirm(this.messages.dialogs_register_delete_confirmation);
        if (!result) return;

        this.showLoading();
        this.produtoCategoriaController.excluir(entity).subscribe(() => {
            this.removeItemLists(entity.id);
            this.messageController.showMessageToast(this.messages.dialogs_register_delete);
            this.hideLoading();
            this.showPanelCad();
        })
    }

    async alterar(entity: ProdutoCategoria) {
        this.showLoading();
        const index = this.entities.indexOf(entity);

        this.produtoCategoriaController.buscarPorId(entity.id).subscribe((result: any) => {
            if (result.length > 0) {
                entity = result[0];
                super.navigatePostParams('produto-categoria-cad', entity, index);
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
