
import { Injectable } from '@angular/core';
import { Fabricante } from '../entity/Fabricante';
import { Controller } from './Controller';

@Injectable({
    providedIn: 'root'
})
export class FabricanteController extends Controller<Fabricante> {

    constructor() {
        super('/fabricantes');
    }

}
