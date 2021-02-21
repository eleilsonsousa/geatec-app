
import { Injectable } from '@angular/core';
import { Produto } from '../entity/Produto';
import { Controller } from './Controller'; 

@Injectable({
    providedIn: 'root'
})
export class ProdutoController extends Controller<Produto> {

    constructor() {
        super('/produtos');
    }

}
