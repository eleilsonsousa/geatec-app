import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { Servico } from 'src/app/entity/Servico';
import { UtilApp } from 'src/app/utils/UtilApp';
import { Cliente } from 'src/app/entity/Cliente';


@Component({
    selector: 'app-servico-cad',
    templateUrl: './servico-cad.page.html'
})
export class ServicoCadPage extends GenericCadPage implements OnInit {

    @ViewChild('inputNome', { static: false }) inputNome: IonInput;
    precoBRL: string;

    ngOnInit() {
        this.createFormFields();
    }

    ionViewWillEnter() {
        this.hideLoading();
        //this.initForm();
    }

    ionViewDidEnter() {
        this.showFocus();
    }

    initForm() {

        /** NOVO */
        if (!this.isAlterCad()) {
            this.entity = new Servico();
        } else {
               /* ALTERAR **/
            this.entity = Object.assign(new Servico(), this.entity);         
            this.precoBRL = UtilApp.formatCurrencyToBRL(this.entity.preco);
            this.entity.preco = this.precoBRL;
        }
    }

    createFormFields() {

        this.initForm();
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            preco: new FormControl(this.entity.preco),
            observacao: new FormControl(this.entity.observacao),
        });
    }

    async submitForm() {

        if (this.validForm()) {
            this.showLoading();

            this.entity = this.formatEntity();
            this.servicoController.salvarOuAlterar(this.entity).subscribe(data => {
                if (!this.entity.id) this.entity.id = data.id;
                this.messageController.showMessageToast(this.messages.dialogs_register_save);
                this.navigatePostParams('servico-list', this.entity, this.entityIndex);
                this.hideLoading();
            });
        }
    }

    showFocus() {
        setTimeout(() => this.inputNome.setFocus(), 400);
    }

    formatCurrency(event) {
        const result = UtilApp.formatCurrencyToBRL(event.value); 
        this.precoBRL = result;
        event.value = result;
    }

    formatEntity() {
        this.entity.preco = UtilApp.formatCurrencyToDecimal(this.precoBRL);
        return this.entity;
    }




}
