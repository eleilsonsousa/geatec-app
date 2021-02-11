import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { GenericValidator } from 'src/app/utils/GenericValidators';
import { Messages } from 'src/app/constants/Messages';
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
    }

    ionViewDidEnter() {
        this.showFocus();

    }

    createFormFields() {

        /** ALTERAR */
        if (this.isAlterCad()) {
            this.isPessoaJuridica = this.entity.isPessoaJuridica;

            /** Ocultar Tab por tipo de pessoa  */
            this.isShowTabPessoaJuridica = this.isPessoaJuridica;
            this.isShowTabPessoaFisica = !this.isPessoaJuridica;

        } else {
            this.entity = new Cliente(); 
        }

        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            razaoSocial: new FormControl(this.entity.razaoSocial, [Validators.required]),
            cpf: new FormControl(this.entity.cpf, Validators.compose([Validators.required, GenericValidator.ValidaCpf])),
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

    selectUf(item) {

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


    async clearFields() {
        if (this.isPessoaJuridica) {
            this.form.get('nome').setValue('');
            this.form.get('cpf').setValue('');
        } else {
            this.form.get('razaoSocial').setValue('');
            this.form.get('fantasia').setValue('');
            this.form.get('inscricaoEstadual').setValue('');
            this.form.get('cnpj').setValue('');
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
            this.form.get('razaoSocial').setValidators(Validators.compose([Validators.required]));
            this.form.get('cnpj').setValidators(Validators.compose([Validators.required]));
            this.form.get('nome').clearValidators();
            this.form.get('cpf').clearValidators();


            this.form.get('nome').updateValueAndValidity();
            this.form.get('razaoSocial').updateValueAndValidity();
            this.form.get('cpf').updateValueAndValidity();
            this.form.get('cnpj').updateValueAndValidity();
        } else {
            this.form.get('nome').setValidators(Validators.compose([Validators.required]));
            this.form.get('cpf').setValidators(Validators.compose([Validators.required, GenericValidator.ValidaCpf]));
            this.form.get('razaoSocial').clearValidators();
            this.form.get('cnpj').clearValidators();

            this.form.get('nome').updateValueAndValidity();
            this.form.get('razaoSocial').updateValueAndValidity();
            this.form.get('cpf').updateValueAndValidity();
            this.form.get('cnpj').updateValueAndValidity();

        }
    }

}
