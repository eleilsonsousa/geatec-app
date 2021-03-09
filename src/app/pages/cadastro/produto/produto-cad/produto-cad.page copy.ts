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
    private idUnidadeSelected;
    private selectText;

    ngOnInit() {
        this.initForm();
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
        
        // BUSCAR UNIDADES //
        this.unidadeController.buscarTodos().subscribe(result => {
            this.listUnidades = result;           
        });
        
        // CRIANDO CAMPOS//
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            precoCompra: new FormControl(this.entity.precoCompra,),
            precoVenda: new FormControl(this.entity.precoVenda),
            unidade: new FormControl(this.entity.unidade.sigla),
            observacao: new FormControl(this.entity.observacao),
        });
     
    }

    async submitForm() {

        if (this.validForm()) {
            this.showLoading();
            this.formToEntity();
            console.log(this.entity);

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
        this.precoCompraFormatted = UtilApp.formatCurrencyToBrl(this.entity.precoCompra);
        this.precoVendaFormatted = UtilApp.formatCurrencyToBrl(this.entity.precoVenda);
        this.entity.precoCompra = this.precoCompraFormatted;
        this.entity.precoVenda = this.precoVendaFormatted;
        this.idUnidadeSelected = this.entity.unidade.id;
        this.selectText = this.entity.unidade.sigla;
        console.log(this.entity);
    }

    formToEntity() {
        this.entity.precoCompra = UtilApp.formatCurrencyToDecimal(this.precoCompraFormatted);
        this.entity.precoVenda = UtilApp.formatCurrencyToDecimal(this.precoVendaFormatted);
        this.entity.unidade = new Unidade();
        this.entity.unidade.id = this.idUnidadeSelected;
        console.log(this.entity);
    }

    async getListUnidades() {

    }
 
    selectUnidade(event: any) {
        this.idUnidadeSelected = event.detail.value;
        var item = this.listUnidades.find(item => item['id'] == this.idUnidadeSelected);
        this.selectText = item.sigla;
    }










}
