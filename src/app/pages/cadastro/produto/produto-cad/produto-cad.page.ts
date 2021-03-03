import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericCadPage } from '../../generic/generic-cad/generic-cad.page';
import { IonInput } from '@ionic/angular';
import { UtilValidators } from 'src/app/utils/UtilValidators';
import { Produto } from 'src/app/entity/Produto';
import { Unidade } from 'src/app/entity/Unidade';


@Component({
    selector: 'app-produto-cad',
    templateUrl: './produto-cad.page.html'
})
export class ProdutoCadPage extends GenericCadPage implements OnInit {

    @ViewChild('inputNome', { static: false }) inputNome: IonInput;
    public listUnidades: any[] = [];
    public listCategorias: any[] = [];

    ngOnInit() {
        this.createFormFields();

    }

    ionViewWillEnter() {
        this.getUnidades();
        this.hideLoading();
        this.initForm();
    }

    ionViewDidEnter() {
        this.showFocus();
    }

    initForm() {

        /** NOVO */
        if (!this.isAlterForm()) {
            this.entity = new Produto();
        } else {

        }
    }

    createFormFields() {
        this.form = new FormGroup({
            nome: new FormControl(this.entity.nome, [Validators.required]),
            precoCompra: new FormControl(this.entity.precoCompra,),
            precoVenda: new FormControl(this.entity.precoVenda),
            unidade: new FormControl(this.entity.unidade),
            observacao: new FormControl(this.entity.observacao),
        });

       console.log(this.entity.unidade);
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

    compareWith(o1: Unidade, o2: Unidade) {
        console.log(o1, o2);
        return o1 && o2 ? o1.id === o2.id : o1 === o2;

    
      }

        public getUnidades() {
        this.unidadeController.buscarTodos().subscribe((result: any) => {
            this.listUnidades = result;
            this.entity.unidade.sigla = "LT";
            //this.form.controls.unidade.setValue("UND");

            this.listUnidades.forEach(element => {
                if (element.id == this.entity.unidade.id) {
                    this.entity.unidade = element;
                   // this.form.controls.unidade.setValue("LT");
                   // this.form.get('unidade').updateValueAndValidity();

                    
                   // this.form.get('unidade').updateValueAndValidity();
                   // console.log('achei', this.entity.unidade)
                }

            });
        });
    }


    

   






}
