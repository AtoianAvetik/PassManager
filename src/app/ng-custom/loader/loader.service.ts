import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

import { NgcLoader } from './loader.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NgcLoaderService {
    loaders: Array<NgcLoader> = [];
    isloaderClosed = new Subject<boolean>();
    isloaderOpened = new Subject<boolean>();

    add(loader: NgcLoader) {
        // add loader to array of active loaders-page
        this.loaders.push(loader);
    }

    remove(id: string) {
        // remove loader from array of active loaders-page
        const loaderToRemove = _.find(this.loaders, {id: id});
        this.loaders = _.without(this.loaders, loaderToRemove);
    }

    create(data: { id: string, content?: string }) {
        const loader = _.find(this.loaders, {id: data.id});
        if (!loader) {
            console.error('Loader instance with id "' + data.id + '" not defined!');
            return null;
        } else {
            loader.content = data.content ? data.content : null;
        }
        return loader;
    }
}
