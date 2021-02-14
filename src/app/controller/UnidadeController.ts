
import { Injectable } from '@angular/core';
import { Unidade } from '../entity/Unidade';
import { Controller } from './Controller';

@Injectable({
    providedIn: 'root'
})
export class UnidadeController extends Controller<Unidade> {

    constructor() {
        super('/unidades');
    }

}
