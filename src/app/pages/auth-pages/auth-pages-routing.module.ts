import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { UnauthGuard } from '../../shared/auth/unauth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sign-in',
                component: SignInComponent,
                canActivate: [UnauthGuard]
            },
            {
                path: 'register-user',
                component: SignUpComponent,
                canActivate: [UnauthGuard]
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                canActivate: [UnauthGuard]
            },
            {
                path: 'verify-email-address',
                component: VerifyEmailComponent,
                canActivate: [UnauthGuard]
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPagesRoutingModule {
}
