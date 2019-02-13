import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component( {
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
} )
export class SignInComponent implements OnInit {
    signInForm: FormGroup;

    constructor( private fb: FormBuilder,
                 public $auth: AuthService ) {
        this.initForm();
    }

    ngOnInit() {
    }

    initForm() {
        this.signInForm = this.fb.group({
            userName: ['', Validators.required],
            userPassword: ['', [Validators.required]],
        });
    }

    onSubmit() {
        this.signInForm['submitted'] = true;
        if (this.signInForm.valid) {
            this.$auth.signIn(this.signInForm.get('userName').value, this.signInForm.get('userPassword').value);
        }
    }
}
