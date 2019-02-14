import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ValidatorsService } from '../../shared/_services/validators.service';



@NgModule({
    imports: [
        CommonModule,
        AuthPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SignInComponent,
        SignUpComponent,
        VerifyEmailComponent,
        ForgotPasswordComponent
    ],
    providers: [ValidatorsService]
})
export class AuthPagesModule {
}
