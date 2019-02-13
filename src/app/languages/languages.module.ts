import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { LanguagesService } from './_services/languages.service';
import { MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient){
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        FormsModule,
        MatSelectModule,
    ],
    declarations: [
        LanguageSwitcherComponent
    ],
    exports: [
        LanguageSwitcherComponent,
        TranslateModule
    ],
    providers: [
        LanguagesService
    ]
})
export class LanguagesModule {
}
