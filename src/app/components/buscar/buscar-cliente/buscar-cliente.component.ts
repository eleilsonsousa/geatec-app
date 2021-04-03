import { Component, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { Messages } from 'src/app/constants/Messages';
import { Cliente } from 'src/app/entity/Cliente';
import { BuscarClienteListPage } from './buscar-cliente-list/buscar-cliente-list.page';

@Component({
    selector: 'app-buscar-cliente',
    templateUrl: './buscar-cliente.component.html'
})
export class BuscarClienteComponent {


    @Output('clienteSelected')
    clienteSelected = new EventEmitter();

    public static clienteSelected: Cliente = new Cliente;
    public messages = Messages;

    constructor(public navCtrl: NavController) {
    }

    onClick($event) {
        this.navCtrl.navigateForward('buscar-cliente-list');
    }

    get cliente() {
        const cliente = BuscarClienteComponent.clienteSelected;
        const result = cliente.isPessoaJuridica ? cliente.razaoSocial : cliente.nome;

        if (cliente.id > 0)
            this.clienteSelected.emit(cliente);

        return result;
    }






}
