import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../core/_services/form.service';

@Component( {
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
} )
export class ForgotPasswordComponent implements OnInit {
    passwordResetForm: FormGroup;

    constructor( private fb: FormBuilder,
                 private $form: FormService,
                 public $auth: AuthService ) {
        this.initForm();
    }

    ngOnInit() {
    }

    initForm() {
        this.passwordResetForm = this.fb.group( {
            passwordResetEmail: ['', [Validators.required, this.$form.validateEmail()]],
        } );
    }

    onSubmit() {
        this.passwordResetForm['submitted'] = true;
        if ( this.passwordResetForm.valid ) {
            this.$auth.forgotPassword( this.passwordResetForm.get( 'passwordResetEmail' ).value);
        }
    }

}
