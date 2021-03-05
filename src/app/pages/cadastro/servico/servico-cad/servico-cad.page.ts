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

    public precoFormatted: any;

    ngOnInit() {
        this.createFormFields();
    }

    ionViewDidEnter() {
        this.focusInit();
    }

    createFormFields() {
        this.initForm();
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            preco: new FormControl(this.entity.preco),
            observacao: new FormControl(this.entity.observacao),
        });      
    }


    initForm() {
        if (this.isAlterForm()) {
            this.entityToForm();
        } else {
            this.entity = new Servico();
        }
    }

    async submitForm() {

        if (this.validForm()) {
            this.showLoading();
            this.formToEntity();

            this.servicoController.salvarOuAlterar(this.entity).subscribe(data => {
                if (!this.entity.id) this.entity.id = data.id;
                this.messageController.showMessageToast(this.messages.dialogs_register_save);
                this.navigatePostParams('servico-list', this.entity, this.entityIndex);
                this.hideLoading();
            });
        }
    }


    async formatPreco(event) {
        event.value = await UtilApp.formatCurrencyToBrlAsync(event.value);
        this.precoFormatted = event.value;
    }

    formToEntity() {
        this.entity.preco = UtilApp.formatCurrencyToDecimal(this.precoFormatted);
    }

    entityToForm() {
        this.entity = Object.assign(new Servico(), this.entity);
        this.entity.preco = UtilApp.formatCurrencyToBrl(this.entity.preco);
        this.precoFormatted = this.entity.preco;
    }

}
