import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable( {
    providedIn: 'root'
} )
export class FormService {

    constructor() {
    }

    validateEmail() {
        return Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
}
