
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Entity } from '../entity/Entity';



@Injectable({
    providedIn: 'root'
})
export class Controller<T> {

    /** URL API */
    public url_base = 'http://api-geatec-com-br.umbler.net';
    private url_full;

    /** HTTP  */
    public http = this.getHttpClient();
    public httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(urlClass) {
        this.url_full = this.url_base + urlClass;
    }

    public buscarTodos(): Observable<T[]> {
    
        return this.http.get<T[]>(this.url_full)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

    buscarPorId(id: number): Observable<T> {
        return this.http.get<T>(this.url_full + '/' + id)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    salvar(t: T): Observable<T> {
        return this.http.post<T>(this.url_full, JSON.stringify(t), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    alterar(t: T): Observable<T> {
        return this.http.put<T>(this.url_full, JSON.stringify(t), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    salvarOuAlterar(t): Observable<T> {
        if (t.id) {
            return this.alterar(t);
        } else {
            return this.salvar(t);
        }
    }

    excluir(t): any {
        return this.http.delete<T>(this.url_full + '/' + t.id, this.httpOptions)
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

    getHttpClient() {
        return new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    }


}
