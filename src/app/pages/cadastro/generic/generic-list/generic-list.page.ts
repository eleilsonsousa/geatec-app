import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonInput, IonSearchbar, IonVirtualScroll, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Messages } from 'src/app/constants/Messages';
import { ClienteController } from 'src/app/controller/ClienteController';
import { FabricanteController } from 'src/app/controller/FabricanteController';
import { LoadController } from 'src/app/controller/LoadController';
import { MessageController } from 'src/app/controller/MessageController';
import { OrdemServicoController } from 'src/app/controller/OrdemServicoController';
import { ProdutoCategoriaController } from 'src/app/controller/ProdutoCategoriaController';
import { ProdutoController } from 'src/app/controller/ProdutoController';
import { ServicoController } from 'src/app/controller/ServicoController';
import { UnidadeController } from 'src/app/controller/UnidadeController';
import { UtilApp } from 'src/app/utils/UtilApp';

@Component({
    selector: 'app-generic-list',
    templateUrl: './generic-list.page.html'
})
export class GenericListPage {

    //@ViewChild('autofocus', { static: false }) autofocusSeachBar: IonSearchbar;
    // @ViewChild('virtualScroll', { read: IonVirtualScroll }) virtualScroll: IonVirtualScroll;

    // constructor --> ionViewDidLoad --> ionViewWillEnter --> ionViewDidEnter --> ionViewWillLeave --> ionViewDidLeave --> ionViewWillUnload.


    /* ionViewWillLeave() {
        this.hideLoading();
    } */

    @ViewChild('inputSearch') inputSearch: IonInput;

    // @ViewChild('inputSearch') inputSearch: ElementRef;

    public searchStr: string = "";
    public entity: any;
    public entities: any[] = [];
    public entitiesFiltradas: any[] = [];
    public isShowSearch = true;
    public isShowBottomClose = false;
    public isEntities = true;
    public messages = Messages;
    public listUnidades:  any[] = [];

    constructor(
        public unidadeController: UnidadeController,
        public clienteController: ClienteController,
        public produtoCategoriaController: ProdutoCategoriaController,
        public fabricanteController: FabricanteController,
        public servicoController: ServicoController,
        public produtoController: ProdutoController,
        public ordemServicoController: OrdemServicoController,
        public toastController: ToastController,       
        public navCtrl: NavController,
        public router: Router,
        public messageController: MessageController,
       
        private routerActive: ActivatedRoute,
        public loadingController: LoadController) {
        this.navigateGetParams()
    }


    public navigateGetParams(): any {
        this.routerActive.params.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                let result = getNav.extras.state.postParams;

                /** result.index --> indice do objeto da lista */
                if (result.index == null) {
                    this.saveItemLists(result.entity);
                } else {
                    this.updateItemLists(result.entity);
                }
            }
        });

    }

    public navigatePostParams(url: string, entity: any, index: any) {
        let navigationExtras: NavigationExtras = {
            state: {
                postParams: { entity: entity, index: index }
            }
        };
        this.router.navigate(['/' + url], navigationExtras);
    }

    public navigate(url: string) {
        this.navCtrl.navigateForward('/' + url);
    }

    public navigateBack() {
        this.navCtrl.navigateBack;
    }

    public showLoading() {
        this.loadingController.showLoading();
    }

    async hideLoading() {
        await this.loadingController.hideLoading();
    }

    saveItemLists(entity) {
        this.entities.push(entity);

        if (this.searchStr) {
            this.entitiesFiltradas.push(entity);
        }

        this.showPanelCad();
    }

    removeItemLists(id) {
        if (this.entities != null)
            for (let index = 0; index < this.entities.length; index++) {
                const element = this.entities[index];
                if (element.id == id) {
                    this.entities.splice(index, 1);
                    this.refreshList();
                    console.log('Delete ', element);
                    break;
                }
            }

        if (this.entitiesFiltradas != null)
            for (let index = 0; index < this.entitiesFiltradas.length; index++) {
                const element = this.entitiesFiltradas[index];
                if (element.id == id) {
                    this.entitiesFiltradas.splice(index, 1);
                    this.refreshList();
                    console.log('Delete ', element);
                    break;
                }
            }
    }

    updateItemLists(entity) {
        if (this.entities != null)
            for (let index = 0; index < this.entities.length; index++) {
                const element = this.entities[index];
                if (element.id == entity.id) {
                    this.entities.splice(index, 1, entity);
                    console.log('Atualizado: ', element);
                    this.refreshList();
                    break;
                }
            }

        if (this.entitiesFiltradas != null)
            for (let index = 0; index < this.entitiesFiltradas.length; index++) {
                const element = this.entitiesFiltradas[index];
                if (element.id == entity.id) {
                    this.entitiesFiltradas.splice(index, 1, entity);
                    this.entitiesFiltradas = [...this.entitiesFiltradas]; // REFRESH
                    console.log('Atualizado: ', element);
                    this.refreshList();
                    break;
                }
            }
    }

    refreshList() {
        this.entities = [...this.entities];
        this.entitiesFiltradas = [...this.entitiesFiltradas];
    }

    public showPanelCad() {
        this.isEntities = this.entities.length > 0;
    }

    public formatToBrl(value) {
        return UtilApp.formatCurrencyToBrl(value);
    }


    /** MAXIMO DE 4 CAMPOS */
    execFilter(field1, field2, field3, field4) {
        return this.entities.filter(entity => {
            let result =
                (entity[field1] ? entity[field1].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field2] ? entity[field2].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field3] ? entity[field3].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false) ||
                (entity[field4] ? entity[field4].toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1 : false); 
            return result;

        });
    }

    async filter(field1, field2, field3, field4) {
        if (!this.searchStr) {
            this.entitiesFiltradas = [];
            return;
        }
        this.entitiesFiltradas = await this.execFilter(field1, field2, field3, field4);
    }

    getEntities() {
        if (this.entitiesFiltradas.length > 0) {
            return this.entitiesFiltradas;
        }
        return this.entities;
    }

    showSearchBar() {
        this.isShowSearch = true;
        this.setFocusSearch();
    }

    hideSearchBar() {
        this.isShowSearch = false;
        this.searchStr = null;
    }

    deleteSearch() {
        this.inputSearch.value = "";
        this.setFocusSearch();
    }

    setFocusSearch() {
        setTimeout(() => {
            this.inputSearch.setFocus();
        }, 300);
    }

    

  
}
