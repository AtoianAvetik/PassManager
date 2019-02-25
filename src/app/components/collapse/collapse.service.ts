import { Subject } from 'rxjs';

export class CollapseService {
    isCollapseTriggered = new Subject<string>();

    constructor() {
    }

    collapse(id: string) {
        this.isCollapseTriggered.next(id);
    }
}
