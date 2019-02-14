import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/_services/validators.service';
import { AuthService } from '../../../shared/auth/auth.service';

@Component( {
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
} )
export class SignUpComponent implements OnInit {
    signUpForm: FormGroup;

    constructor( private fb: FormBuilder,
                 private $validators: ValidatorsService,
                 public $auth: AuthService ) {
        this.initForm();
    }

    ngOnInit() {
    }

    initForm() {
        this.signUpForm = this.fb.group( {
            userName: ['', [Validators.required]],
            userEmailAddress: ['', [Validators.required, this.$validators.email.bind(this.$validators)]],
            userPassword: ['', [Validators.required]],
        } );
    }

    onSubmit() {
        this.signUpForm['submitted'] = true;
        if ( this.signUpForm.valid ) {
            this.$auth.signUp( this.signUpForm.get( 'userEmailAddress' ).value, this.signUpForm.get( 'userPassword' ).value );
        }
    }

}
