import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

class ApiError {
    constructor(public status: number, public type: string, public message: string, public body: any) {
    }
}


@Injectable()
export class ApiService {
    private url = environment.api;
    private assetsPath = '/assets/data';
    private headers = new HttpHeaders({'Content-type': 'application/json'});
    private options = {
        headers: this.headers,
        params: new HttpParams()
    };

    constructor(private http: HttpClient) {
    }

    setOptionWithParams(params, responseType = 'json') {
        return {
            headers: this.headers,
            responseType: responseType,
            params: Object.getOwnPropertyNames(params)
                .reduce((p, key) => p.set(key, params[key]), new HttpParams())
        };
    }

    post(path, data) {
        return this.http.post(`${this.url + path}`, data).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    put(path, data) {
        return this.http.put(`${this.url + path}`, data).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    get(path, params?, responseType?) {
        const options = params ? this.setOptionWithParams(params, responseType) : this.options;

        return this.http.get(`${this.url + path}`, options).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    getLocalFile(path) {
        return new Observable(observer => {
            this.http.get(`${this.assetsPath + path}`)
                .subscribe(res => {
                    observer.next(res);
                }, err => {
                    observer.error(err);
                });
        });
    }

    handleErrors(err) {
        switch (err.status) {
            case 400: {
                break;
            }
            case 401: {
                break;
            }
            case 403 : {
                break;
            }
            case 500: {
                break;
            }
        }
        return throwError(
            new ApiError(
                err.status,
                err.error && err.error.type || err.name,
                err.error && err.error.message || err.statusText,
                err.error.errors
            )
        );
    }
}

