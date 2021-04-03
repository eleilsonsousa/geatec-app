
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from '../entity/Cliente';
import { Controller } from './Controller';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ClienteController extends Controller<Cliente>{

    constructor() {
        super('/clientes');
    }

}
