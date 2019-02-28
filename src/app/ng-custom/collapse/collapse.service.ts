import { Subject } from 'rxjs';

export class NgcCollapseService {
    isCollapseTriggered = new Subject<string>();

    constructor() {
    }

    toggle(id: string) {
        this.isCollapseTriggered.next(id);
    }
}
