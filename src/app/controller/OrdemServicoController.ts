
import { Injectable } from '@angular/core';
import { Unidade } from '../entity/Unidade';
import { Controller } from './Controller';

@Injectable({
    providedIn: 'root'
})
export class OrdemServicoController extends Controller<Unidade> {

    constructor() {
        super('/ordens-servicos');
    }

}
