import { Injectable } from '@angular/core';
import { Language } from '../_models/language.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguagesService {
    selected: Language;
    languages: Language[] = [
        new Language('en', 'English'),
        new Language('ru', 'Russian')
    ];

    constructor(private $translate: TranslateService) {
        this.setDefault();
    }

    setDefault() {
        const defaultLanguge = 'en';
        this.$translate.setDefaultLang(defaultLanguge);
        this.setLanguage(defaultLanguge);
    }

    setLanguage(languageCode: string) {
        this.$translate.use(languageCode);
        this.selected = this.languages.find(language => language.code === languageCode);
    }
}
