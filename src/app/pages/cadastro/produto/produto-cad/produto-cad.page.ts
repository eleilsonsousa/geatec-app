import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { UtilValidators } from 'src/app/utils/UtilValidators';
import { Produto } from 'src/app/entity/Produto';
import { Unidade } from 'src/app/entity/Unidade';
import { UtilApp } from 'src/app/utils/UtilApp';


@Component({
    selector: 'app-produto-cad',
    templateUrl: './produto-cad.page.html'
})
export class ProdutoCadPage extends GenericCadPage implements OnInit {

    @ViewChild('inputNome', { static: false }) inputNome: IonInput;
    public listUnidades: any[] = [];
    public listCategorias: any[] = [];

    private precoCompraFormatted;
    private precoVendaFormatted;

    ngOnInit() {
        this.createFormFields();
    }

    ionViewDidEnter() {
        this.showFocus();
    }

    initForm() {

        if (this.isAlterForm()) {
            this.entityToForm();
        } else {
            this.entity = new Produto();
        }
    }

    createFormFields() {
        this.initForm();
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            precoCompra: new FormControl(this.entity.precoCompra,),
            precoVenda: new FormControl(this.entity.precoVenda),
            unidade: new FormControl(this.entity.unidade),
            observacao: new FormControl(this.entity.observacao),
        });
    }

    async submitForm() {
        console.log(this.entity);

        if (this.validForm()) {
            this.showLoading();
            this.formToEntity();    

            this.produtoController.salvarOuAlterar(this.entity).subscribe(data => {
                if (!this.entity.id) this.entity.id = data.id;
                this.messageController.showMessageToast(this.messages.dialogs_register_save);
                this.navigatePostParams('produto-list', this.entity, this.entityIndex);
                this.hideLoading();
            });
        }
    }

    showFocus() {
        setTimeout(() => this.inputNome.setFocus(), 400);
    }

    async formatPrecoCompra(event) {
        event.value = await UtilApp.formatCurrencyToBrlAsync(event.value);
        this.precoCompraFormatted = event.value;
    }

    async formatPrecoVenda(event) {
        event.value = await UtilApp.formatCurrencyToBrlAsync(event.value);
        this.precoVendaFormatted = event.value;
    }

    entityToForm() {
        this.entity = Object.assign(new Produto(), this.entity);
        this.precoCompraFormatted  = UtilApp.formatCurrencyToBrl(this.entity.precoCompra);
        this.precoVendaFormatted  = UtilApp.formatCurrencyToBrl(this.entity.precoVenda);
        this.entity.precoCompra = this.precoCompraFormatted;
        this.entity.precoVenda = this.precoVendaFormatted;
    }

    formToEntity() {
        this.entity.precoCompra = UtilApp.formatCurrencyToDecimal(this.precoCompraFormatted);
        this.entity.precoVenda = UtilApp.formatCurrencyToDecimal(this.precoVendaFormatted);
    }










}
