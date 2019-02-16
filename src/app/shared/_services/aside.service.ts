import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { WindowRef } from './window-ref';

@Injectable()
export class AsideService {
    isNavExpand = true;
    isMenuExpand = true;
    isHideAside = false;
    isAsideHiddenNavExpand = true;
    isAsideHiddenMenuExpand = false;
    isNavExpandChange = new Subject<boolean>();
    isMenuExpandChange = new Subject<boolean>();
    isHideAsideChange = new Subject<boolean>();

    constructor(private _winRef: WindowRef) {
        this.isNavExpandChange.subscribe(status => {
            this.isNavExpand = status;
        });
        this.isMenuExpandChange.subscribe(status => {
            this.isMenuExpand = status;
        });
        this.isHideAsideChange.subscribe(status => {
            this.isHideAside = status;
        });

    }

    hoverAside(value) {
        if (!this.isNavExpand) {
            this.isMenuExpandChange.next(value);
            this.isAsideHiddenMenuExpand = value;
        }
    }

    toggleAside(value) {
        this.isNavExpandChange.next(value);
        this.isAsideHiddenNavExpand = value;
    }

    hideAside() {
        if (this._winRef.nativeWindow.innerWidth < 1025) {
            this.isHideAsideChange.next(true);
            this.isMenuExpandChange.next(true);
            this.isNavExpandChange.next(true);
        } else {
            this.isHideAsideChange.next(false);
            this.hoverAside(this.isAsideHiddenMenuExpand);
            this.toggleAside(this.isAsideHiddenNavExpand);
        }
    }
}
