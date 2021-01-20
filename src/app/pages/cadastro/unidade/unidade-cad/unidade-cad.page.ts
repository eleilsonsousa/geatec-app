import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, NavController } from '@ionic/angular';
import { UnidadeController } from 'src/app/controller/UnidadeController';
import { Unidade } from 'src/app/entity/Unidade';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';

@Component({
    selector: 'app-unidade-cad',
    templateUrl: './unidade-cad.page.html'
})
export class UnidadeCadPage extends GenericCadPage implements OnInit {


    ngOnInit() {
        this.createFormFields();
    }

    createFormFields() {
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            sigla: new FormControl(this.entity.sigla, [Validators.required]),
            descricao: new FormControl(this.entity.descricao),
        });
    }

    async submitForm() {
        const validForm = this.validForm();

        if (validForm) {
            this.showLoading();
            
            //MELHORAR ISSO //
            let unidade = (this.entity as Unidade);
            unidade.sigla = unidade.sigla.toUpperCase();

            this.unidadeController.salvarOuAlterar(unidade).subscribe(data => {

                // NOVO REGISTRO//
                if (!this.entity.id) this.entity.id = data.id;

                this.messageController.showMessageToast('Registro salvo');
                this.navigatePostParams('unidade-list', this.entity, this.entityIndex);
                this.hideLoading();
            });
        }
    }

}
