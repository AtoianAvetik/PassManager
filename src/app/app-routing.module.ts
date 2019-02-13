import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/_services/auth.guard';
import { UnauthGuard } from './auth/_services/unauth.guard';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard]
    },
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
];

@NgModule( {
    imports: [RouterModule.forRoot( appRoutes )],
    exports: [RouterModule]
} )

export class AppRoutingModule {

}
