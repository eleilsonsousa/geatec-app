import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { UtilValidators } from 'src/app/utils/UtilValidators';
import { Unidade } from 'src/app/entity/Unidade';

@Component({
    selector: 'app-unidade-cad',
    templateUrl: './unidade-cad.page.html'
})
export class UnidadeCadPage extends GenericCadPage implements OnInit {

    @ViewChild('inputNome', { static: false }) inputNome: IonInput;


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

        /** NOVO */
        if (!this.isAlterCad()) {
            this.entity = new Unidade();
        }
    }

    createFormFields() {
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            sigla: new FormControl(this.entity.sigla, [Validators.required]),
            descricao: new FormControl(this.entity.descricao,),
        });
    }

    async submitForm() {
        if (this.validForm()) {
            this.showLoading();
            this.entity = this.formatEntity();
            this.unidadeController.salvarOuAlterar(this.entity).subscribe(data => {
                if (!this.entity.id) this.entity.id = data.id;
                this.messageController.showMessageToast(this.messages.dialogs_register_save);
                this.navigatePostParams('unidade-list', this.entity, this.entityIndex);
                this.hideLoading();
            });
        }
    }

    showFocus() {
        setTimeout(() => this.inputNome.setFocus(), 400);
    }

    formatEntity() {
        this.entity.sigla = (this.entity.sigla + '').toLocaleUpperCase();
        return this.entity;
    }
    



}
