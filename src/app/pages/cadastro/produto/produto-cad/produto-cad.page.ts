import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { UtilValidators } from 'src/app/utils/UtilValidators';
import { Produto } from 'src/app/entity/Produto';

@Component({
    selector: 'app-produto-cad',
    templateUrl: './produto-cad.page.html'
})
export class ProdutoCadPage extends GenericCadPage implements OnInit {

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
            this.entity = new Produto();
        }
    }

    createFormFields() {
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            precoCompra: new FormControl(this.entity.precoCompra,),
            precoVenda: new FormControl(this.entity.precoVenda,),
            unidade: new FormControl(this.entity.unidade,),
            categoria: new FormControl(this.entity.categoria,),
            observacao: new FormControl(this.entity.observacao,)
        });
    }

    async submitForm() {
        console.log(this.entity);
       
        if (this.validForm()) {
            this.showLoading();
          
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

    formatEntity() {

    }




}
