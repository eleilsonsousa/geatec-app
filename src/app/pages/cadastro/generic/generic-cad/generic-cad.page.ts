import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonInput, NavController, ToastController } from '@ionic/angular';
import { Constants } from 'src/app/constants/Constants';
import { ClienteController } from 'src/app/controller/ClienteController';
import { LoadController } from 'src/app/controller/LoadController';
import { MessageController } from 'src/app/controller/MessageController';
import { UnidadeController } from 'src/app/controller/UnidadeController';

@Component({
    selector: 'app-generic-cad',
    templateUrl: './generic-cad.page.html'
})
export class GenericCadPage {



    @ViewChild('autofocus', { static: false }) autofocuInputs: IonInput;

    ionViewWillEnter() {
        //  setTimeout(() => this.autofocuInputs.setFocus(), 300);
    }

    /** DADOS GENERICOS PARA CADASTROS */
    public form: FormGroup;
    public entity: any = {};
    public entityIndex: any;
    public isSubmitted = false;
    public postParams: any;
    public listUf = Constants.UFS;
    /**************************************** */


    constructor(
        public unidadeController: UnidadeController,
        public clienteController: ClienteController,
        public navCtrl: NavController,
        public router: Router,
        public messageController: MessageController,
        private routerActive: ActivatedRoute,
        public loadingController: LoadController) {
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

    public showLoading() {
        return this.loadingController.showLoading();
    }

    async hideLoading() {
        await this.loadingController.hideLoading();
    }

    removeValidation(nameField: string) {
        this.form.get(nameField).clearValidators();
        this.form.get(nameField).updateValueAndValidity();
    }

    addValidation(nameField: string) {
        this.form.get(nameField).setValidators([Validators.required]);
        this.form.get(nameField).updateValueAndValidity();
    }

   
}
