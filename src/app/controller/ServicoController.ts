
import { Injectable } from '@angular/core';
import { Servico } from '../entity/Servico';
import { Controller } from './Controller';

@Injectable({
    providedIn: 'root'
})
export class ServicoController extends Controller<Servico> {

    constructor() {
        super('/servicos');
    }

}
