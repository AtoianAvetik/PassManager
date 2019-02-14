import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/_services/validators.service';
import { AuthService } from '../../../shared/auth/auth.service';

@Component( {
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
} )
export class SignInComponent implements OnInit {
    signInForm: FormGroup;

    constructor( private fb: FormBuilder,
                 private $validators: ValidatorsService,
                 public $auth: AuthService ) {
        this.initForm();
    }

    ngOnInit() {
    }

    initForm() {
        this.signInForm = this.fb.group({
            userEmailAddress: ['', [Validators.required, this.$validators.email.bind(this.$validators)]],
            userPassword: ['', [Validators.required]],
        });
    }

    onSubmit() {
        this.signInForm['submitted'] = true;
        if (this.signInForm.valid) {
            this.$auth.signIn(this.signInForm.get('userEmailAddress').value, this.signInForm.get('userPassword').value);
        }
    }
}
