import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { LanguagesModule } from '../languages/languages.module';
import { ApiService } from './_services/api.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './_services/notification.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LanguagesModule,
        BrowserAnimationsModule,
        AuthModule,
        ToastrModule.forRoot({
            enableHtml: true
        })
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        ApiService,
        NotificationService
    ]
})

export class CoreModule {
}
