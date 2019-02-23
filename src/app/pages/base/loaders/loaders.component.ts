import { Component } from '@angular/core';

import { LoaderService } from '../../../components/loader/loader.service';

@Component({
    selector: 'app-loaders',
    templateUrl: './loaders.component.html',
    styleUrls: ['./loaders.component.scss']
})

export class LoadersComponent {
    loader;

    constructor(private _loaderService: LoaderService) {
    }

    // Loaders

    loaderOpen(id: string, text: string) {
        if (text) {
            this.loader = this._loaderService.create({
                id: id,
                content: text
            });
        } else {
            this.loader = this._loaderService.create({
                id: id
            });
        }
        this.loader.present().subscribe(() => {
            setTimeout(() => {
                this.loader.dismiss();
            }, 1000);
        });
    }
}
