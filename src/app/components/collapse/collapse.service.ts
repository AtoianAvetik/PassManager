import { Subject } from 'rxjs';

export class CollapseService {
    isCollapseTriggered = new Subject<string>();

    constructor() {
    }

    toggle(id: string) {
        this.isCollapseTriggered.next(id);
    }
}
