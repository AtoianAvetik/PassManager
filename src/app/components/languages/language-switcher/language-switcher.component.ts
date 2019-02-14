import { Component, ViewEncapsulation } from '@angular/core';
import { LanguagesService } from '../_services/languages.service';
import { Language } from '../_models/language.model';

@Component({
    selector: 'app-language-switcher',
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LanguageSwitcherComponent {
    languages: Language[] = [];
    selected: Language;

    constructor(private $languages: LanguagesService){
        this.languages = $languages.languages;
        this.selected = $languages.selected;
    }

    onSwitch(event){
        let languageCode = event.value.code;
        this.$languages.setLanguage(languageCode);
    }
}
