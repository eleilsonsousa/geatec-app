//import { CurrencyPipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonInput, NavController, ToastController } from '@ionic/angular';
import { Constants } from 'src/app/constants/Constants';
import { Messages } from 'src/app/constants/Messages';
import { ClienteController } from 'src/app/controller/ClienteController';
import { FabricanteController } from 'src/app/controller/FabricanteController';
import { LoadController } from 'src/app/controller/LoadController';
import { MessageController } from 'src/app/controller/MessageController';
import { ProdutoCategoriaController } from 'src/app/controller/ProdutoCategoriaController';
import { ServicoController } from 'src/app/controller/ServicoController';
import { UnidadeController } from 'src/app/controller/UnidadeController';
import { UtilValidators } from 'src/app/utils/UtilValidators';
import { UtilApp } from 'src/app/utils/UtilApp';
import { ProdutoController } from 'src/app/controller/ProdutoController';


@Component({
    selector: 'app-generic-cad',
    templateUrl: './generic-cad.page.html'
})
export class GenericCadPage {

    @ViewChild('autofocus', { static: false }) autofocuInputs: IonInput;

    /** DADOS GENERICOS PARA CADASTROS */
    public form: FormGroup;
    public entity: any = {};
    public entityIndex: any;
    public isSubmitted = false;
    public isSaveAndBack = false;
    public postParams: any;
    public listUf = Constants.UFS;
    public messages = Messages;
    /**************************************** */


    constructor(
        public unidadeController: UnidadeController,
        public clienteController: ClienteController,
        public produtoCategoriaController: ProdutoCategoriaController,
        public fabricanteController: FabricanteController,
        public servicoController: ServicoController,
        public produtoController: ProdutoController,
        public navCtrl: NavController,
        public router: Router,
        public messageController: MessageController,
        public currencyPipe: CurrencyPipe,
        private routerActive: ActivatedRoute,
        private loadingController: LoadController,
        
        ) {
        this.showLoading();
        this.navigateGetParams();
    }

    public get errorControl() {
        return this.form.controls;
    }

    public validForm(): boolean {
        this.isSubmitted = true;
        if (!this.form.valid)
            return false;
        else {
            const id = this.entity.id;
            this.entity = this.form.value;
            this.entity.id = id;
            return true;
        }
    }

    public isAlterCad(): boolean {
        return this.entity.id != null;
    }

    public navigateBack() {
        this.navCtrl.back();
    }

    public showLoading() {
        return this.loadingController.showLoading();
    }

    navigatePostParams(url: string, entity: any, index: any) {
        let navigationExtras: NavigationExtras = {
            state: {
                postParams: { entity: entity, index: index }
            }
        };
        this.router.navigate(['/' + url], navigationExtras);
    }

    navigateGetParams(): any {
        this.routerActive.params.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                const result = getNav.extras.state.postParams;
                this.entity = result.entity;
                this.entityIndex = result.index;
            }
        });
    }

    public navigate(url: string) {
        this.navCtrl.navigateForward('/' + url);
    }



    async hideLoading() {
        await this.loadingController.hideLoading();
    }

    removeValidation(nameField: string) {
        this.form.get(nameField).clearValidators();
        this.form.get(nameField).updateValueAndValidity();
    }

    addValidation(nameField: string, validatiors: any) {
        this.form.get(nameField).setValidators(validatiors);
        this.form.get(nameField).updateValueAndValidity();
    }

}
