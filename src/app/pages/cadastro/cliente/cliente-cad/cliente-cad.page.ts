import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { UtilValidators } from 'src/app/utils/UtilValidators';
import { Cliente } from 'src/app/entity/Cliente';

@Component({
    selector: 'app-cliente-cad',
    templateUrl: './cliente-cad.page.html'
})
export class ClienteCadPage extends GenericCadPage implements OnInit {

    @ViewChild('inputNome', { static: false }) inputNome: IonInput;
    @ViewChild('inputRazaoSocial', { static: false }) inputRazaoSocial: IonInput;

    isPessoaJuridica: boolean = false;
    isShowTabPessoaFisica = true;
    isShowTabPessoaJuridica = true;


    ngOnInit() {
        this.createFormFields();
    }

    ionViewWillEnter() {
        this.hideLoading();
        this.initForm();
    }

    ionViewDidEnter() {
        this.showFocus();
    }

    initForm() {

        /** ALTERAR */
        if (this.isAlterForm()) {
            this.isPessoaJuridica = this.entity.isPessoaJuridica;

            /** Ocultar Tab por tipo de pessoa  */
            this.isShowTabPessoaJuridica = this.isPessoaJuridica;
            this.isShowTabPessoaFisica = !this.isPessoaJuridica;

        } else {
            this.entity = new Cliente();
        }
    }

    createFormFields() {

        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            razaoSocial: new FormControl(this.entity.razaoSocial, [Validators.required]),
            cpf: new FormControl(this.entity.cpf, Validators.compose([Validators.required, UtilValidators.ValidaCpf])),
            cnpj: new FormControl(this.entity.cnpj, [Validators.required]),
            fantasia: new FormControl(this.entity.fantasia,),
            inscricaoEstadual: new FormControl(this.entity.inscricaoEstadual),
            endereco: new FormControl(this.entity.endereco),
            cidade: new FormControl(this.entity.cidade),
            uf: new FormControl(this.entity.uf),
            cep: new FormControl(this.entity.cep),
            telefone: new FormControl(this.entity.telefone),
            celular: new FormControl(this.entity.celular),
            email: new FormControl(this.entity.email),
            complemento: new FormControl(this.entity.complemento),
            isPessoaJuridica: new FormControl(this.isPessoaJuridica)
        });
    }

    async submitForm() {

        this.configValidations();
        if (this.validForm()) {
            this.showLoading();

            /** PJ OU PF */
            this.entity.isPessoaJuridica = this.isPessoaJuridica;
            this.clearEntity();

            this.clienteController.salvarOuAlterar(this.entity).subscribe(data => {

                // NOVO REGISTRO//
                if (!this.entity.id) this.entity.id = data.id;
                this.messageController.showMessageToast(this.messages.dialogs_register_save);
                this.navigatePostParams('cliente-list', this.entity, this.entityIndex);
                this.hideLoading();
            });
        }
    }


    selectTipoPessoa(event: any) {
        this.isPessoaJuridica = !this.isPessoaJuridica;
        this.showFocus();
    }

    showFocus() {
        if (this.isPessoaJuridica) {
            setTimeout(() => this.inputRazaoSocial.setFocus(), 400);
        } else {
            setTimeout(() => this.inputNome.setFocus(), 400);
        }
    }

    async clearEntity() {
        if (this.isPessoaJuridica) {
            this.entity.nome = null;
            this.entity.cpf = null;
        } else {
            this.entity.razaoSocial = null;
            this.entity.fantasia = null;
            this.entity.inscricaoEstadual = null;
            this.entity.cnpj = null;
        }
    }

    configValidations() {
        if (this.isPessoaJuridica) {
            this.addValidation('razaoSocial', Validators.compose([Validators.required]));
            this.addValidation('cnpj', Validators.compose([Validators.required]));
            this.removeValidation('nome');
            this.removeValidation('cpf');
        } else {
            this.addValidation('nome', Validators.compose([Validators.required]));
            this.addValidation('cpf', Validators.compose([Validators.required, UtilValidators.ValidaCpf]));
            this.removeValidation('razaoSocial');
            this.removeValidation('cnpj');
        }
    }
}
