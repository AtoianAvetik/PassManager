import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export class Icon {
    key: string;
    url: string;

    constructor(key, url) {
        this.key = key;
        this.url = url;
    }
}

@Injectable( {
    providedIn: 'root'
} )
export class IconsService  {
    customMatIcons = [
        // new Icon('menu', '/assets/img/icons/menu.svg')
    ];

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
    }

    registerIcons(arr) {
        arr.forEach((el) => {
            this.registerIcon(el.key, el.url);
        });
    }

    registerIcon(name, path) {
        this.matIconRegistry.addSvgIcon(
            name,
            this.domSanitizer.bypassSecurityTrustResourceUrl( path )
        );
    }
}
