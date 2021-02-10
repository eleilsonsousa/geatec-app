
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from '../entity/Cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteController {

    url = 'http://api-geatec-com-br.umbler.net/clientes'; // api rest fake

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    // Obtem todos os carros
    buscarTodos(): Observable<Cliente[]> {
        return this.httpClient.get<Cliente[]>(this.url)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

    // Obtem um carro pelo id
    buscarPorId(id: number): Observable<Cliente> {
        return this.httpClient.get<Cliente>(this.url + '/' + id)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }
    

    /** SALVAR  */
    salvar(cliente: Cliente): Observable<Cliente> {

        console.log("cliente -->", cliente.isPessoaJuridica);
        return this.httpClient.post<Cliente>(this.url, JSON.stringify(cliente), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    alterar(cliente: Cliente): Observable<Cliente> {
        return this.httpClient.put<Cliente>(this.url, JSON.stringify(cliente), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    salvarOuAlterar(cliente:Cliente): Observable<Cliente> {
         if (cliente.id) {
            return this.alterar(cliente);
        } else {
            return this.salvar(cliente);
        }
    }

    excluir(cliente: Cliente): any {
        return this.httpClient.delete<Cliente>(this.url + '/' + cliente.id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }


    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };

}
