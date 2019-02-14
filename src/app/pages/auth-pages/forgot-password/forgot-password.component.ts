import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth/auth.service';
import { ValidatorsService } from '../../../shared/_services/validators.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    passwordResetForm: FormGroup;

    constructor(private fb: FormBuilder,
                private $validators: ValidatorsService,
                public $auth: AuthService) {
        this.initForm();
    }

    ngOnInit() {
    }

    initForm() {
        this.passwordResetForm = this.fb.group({
            passwordResetEmail: ['', [Validators.required, this.$validators.email.bind(this.$validators)]],
        });
    }

    onSubmit() {
        this.passwordResetForm['submitted'] = true;
        if (this.passwordResetForm.valid) {
            this.$auth.forgotPassword(this.passwordResetForm.get('passwordResetEmail').value);
        }
    }

}
