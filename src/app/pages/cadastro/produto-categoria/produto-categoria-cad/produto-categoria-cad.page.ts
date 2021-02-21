import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { UtilValidators } from 'src/app/utils/UtilValidators';
import { ProdutoCategoria } from 'src/app/entity/ProdutoCategoria';

@Component({
    selector: 'app-produto-categoria-cad',
    templateUrl: './produto-categoria-cad.page.html'
})
export class ProdutoCategoriaCadPage extends GenericCadPage implements OnInit {

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
            this.entity = new ProdutoCategoria();
        }
    }

    createFormFields() {
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
        });
    }

    async submitForm() {
        console.log(this.entity);
        if (this.validForm()) {
            console.log(this.entity);
            this.showLoading();
            this.produtoCategoriaController.salvarOuAlterar(this.entity).subscribe(data => {
                if (!this.entity.id) this.entity.id = data.id;
                this.messageController.showMessageToast(this.messages.dialogs_register_save);
                this.navigatePostParams('produto-categoria-list', this.entity, this.entityIndex);
                this.hideLoading();
            });
        }
    }

    showFocus() {
        setTimeout(() => this.inputNome.setFocus(), 400);
    }
    



}
