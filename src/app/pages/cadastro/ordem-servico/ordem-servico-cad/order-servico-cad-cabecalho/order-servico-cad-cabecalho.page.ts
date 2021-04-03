import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/entity/Cliente';
import { OrdemServico } from 'src/app/entity/OrdemServico';
import { GenericCadPage } from '../../../generic/generic-cad/generic-cad.page';

@Component({
    selector: 'app-order-servico-cad-cabecalho',
    templateUrl: './order-servico-cad-cabecalho.page.html'
})
export class OrderServicoCadCabecalhoPage extends GenericCadPage implements OnInit {

   

    ngOnInit() {
        this.initForm();
    }

    initForm() {

        if (this.isAlterForm()) {
            this.entityToForm();
        } else {
            this.entity = new OrdemServico();
        }

        

        // CRIANDO CAMPOS//
        this.form = new FormGroup({
            cliente: new FormControl(this.entity.cliente.nome),
        });

    }


    entityToForm() {
        this.entity = Object.assign(new OrdemServico(), this.entity);
    }

    async submitForm() {

        if (this.validForm()) {

        }
    }

    onClienteSelected(event) {
       this.entity.cliente = event;
    }

    onClick(event) {
        console.log( this.entity.cliente);
     }

}
