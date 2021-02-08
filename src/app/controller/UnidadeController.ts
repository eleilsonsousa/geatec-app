
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Unidade } from '../entity/Unidade';

@Injectable({
    providedIn: 'root'
})
export class UnidadeController {

    url = 'http://api-geatec-com-br.umbler.net/unidades'; // api rest fake

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    // Obtem todos os carros
    buscarTodos(): Observable<Unidade[]> {
        return this.httpClient.get<Unidade[]>(this.url)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

    // Obtem um carro pelo id
    buscarPorId(id: number): Observable<Unidade> {
        return this.httpClient.get<Unidade>(this.url + '/' + id)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    /** SALVAR  */
    salvar(unidade: Unidade): Observable<Unidade> {
        return this.httpClient.post<Unidade>(this.url, JSON.stringify(unidade), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    alterar(unidade: Unidade): Observable<Unidade> {
        return this.httpClient.put<Unidade>(this.url, JSON.stringify(unidade), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    salvarOuAlterar(unidade:Unidade): Observable<Unidade> {
         if (unidade.id) {
            return this.alterar(unidade);
        } else {
            return this.salvar(unidade);
        }
    }

    excluir(unidade: Unidade): any {
        return this.httpClient.delete<Unidade>(this.url + '/' + unidade.id, this.httpOptions)
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
