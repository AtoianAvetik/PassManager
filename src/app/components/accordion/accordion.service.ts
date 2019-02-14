import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AccordionService {
    onCloseOthers: Subject<string> = new Subject();

    constructor() {
    }
}
