import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../core/_services/form.service';

@Component( {
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
} )
export class SignUpComponent implements OnInit {
    signUpForm: FormGroup;

    constructor( private fb: FormBuilder,
                 private $form: FormService,
                 public $auth: AuthService ) {
        this.initForm();
    }

    ngOnInit() {
    }

    initForm() {
        this.signUpForm = this.fb.group( {
            userEmailAddress: ['', [Validators.required, this.$form.validateEmail()]],
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
