import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class NgcDropdownService {
    _isOpen = new BehaviorSubject<boolean>(false);
    onToggleChange = new Subject();

    constructor() {
    }

    isOpen() {
        return this._isOpen.value;
    }
}
