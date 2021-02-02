import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { Constants } from '../../../../constants/Constants';
import { IonInput } from '@ionic/angular';

@Component({
    selector: 'app-cliente-cad',
    templateUrl: './cliente-cad.page.html'
})
export class ClienteCadPage extends GenericCadPage implements OnInit {

    @ViewChild('inputNome', { static: false }) inputNome: IonInput;
    @ViewChild('inputRazaoSocial', { static: false }) inputRazaoSocial: IonInput;

    isPessoaJuridica: boolean = false;

    ngOnInit() {
        this.createFormFields();
    }

    ionViewWillEnter() {
        this.hideLoading();
    }

    ionViewDidEnter(){
        this.showFocus();
        
    }

    createFormFields() {
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            razaoSocial: new FormControl(this.entity.razaoSocial, [Validators.required]),
            cpf: new FormControl(this.entity.cpf, [Validators.required]),
            cnpj: new FormControl(this.entity.cnpj,[Validators.required]),
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
        const validForm = this.validForm();

        console.log(this.entity);


        if (validForm) {
           
            this.clienteController.salvarOuAlterar(this.entity).subscribe(data => {

                // NOVO REGISTRO//
                if (!this.entity.id) this.entity.id = data.id;
                this.messageController.showMessageToast('Registro salvo');
                this.navigatePostParams('cliente-list', this.entity, this.entityIndex);
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

       this.clearFields();

        if (this.isPessoaJuridica) {
            setTimeout(() => this.inputRazaoSocial.setFocus(), 400);
        } else {
            setTimeout(() => this.inputNome.setFocus(), 400);
        }
    }


    clearFields() {
        if (this.isPessoaJuridica) {
           this.form.get('nome').setValue('');
           this.form.get('cpf').setValue('');
        }else {
            this.form.get('razaoSocial').setValue('');
            this.form.get('fantasia').setValue('');
            this.form.get('inscricaoEstadual').setValue('');
            this.form.get('cnpj').setValue('');
        }   


    }

    configValidations() {
        if (this.isPessoaJuridica) {
            this.addValidation('razaoSocial');
            this.addValidation('cnpj');

            this.removeValidation('nome');
            this.removeValidation('cpf');           
        } else {
            this.addValidation('nome');
            this.addValidation('cpf');         

            this.removeValidation('razaoSocial');
            this.removeValidation('cnpj');
        }

    }



}
