import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonSearchbar, IonVirtualScroll, LoadingController, NavController, ToastController } from '@ionic/angular';
import { ClienteController } from 'src/app/controller/ClienteController';
import { LoadController } from 'src/app/controller/LoadController';
import { MessageController } from 'src/app/controller/MessageController';
import { UnidadeController } from 'src/app/controller/UnidadeController';

@Component({
    selector: 'app-generic-list',
    templateUrl: './generic-list.page.html'
})
export class GenericListPage {

    //@ViewChild('autofocus', { static: false }) autofocusSeachBar: IonSearchbar;
   // @ViewChild('virtualScroll', { read: IonVirtualScroll }) virtualScroll: IonVirtualScroll;

   // constructor --> ionViewDidLoad --> ionViewWillEnter --> ionViewDidEnter --> ionViewWillLeave --> ionViewDidLeave --> ionViewWillUnload.
   

    public searchStr: string = "";
    public entity: any;
    public entities: any[] = [];
    public entitiesFiltradas: any[] = [];

    constructor(
        public unidadeController: UnidadeController,
        public clienteController: ClienteController,
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

                console.log('Entrei - result --> ', result); 

                /** result.index --> indice do objeto da lista */
                if (result.index == null) {
                    this.saveItemLists(result.entity);
                } else {
                    this.updateItemLists(result.entity);
                }

                //** LIMPANDO FILTROS */ 
                this.entitiesFiltradas = [];
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

    public showLoading() {
        this.loadingController.showLoading('Aguarde, por favor...', 1000);
    }

    async hideLoading() {
        await this.loadingController.hideLoading();
    }

    saveItemLists(entity) {
        this.entities.push(entity);
        this.entitiesFiltradas.push(entity);

           /*  if (this.entitiesFiltradas != null) {
               this.entitiesFiltradas.push(entity);
               this.entitiesFiltradas = [...this.entitiesFiltradas]; // REFRESH 
           }  */
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


}
