import {
    AfterContentChecked,
    ContentChildren, Directive,
    Input, OnInit,
    QueryList,
} from '@angular/core';

import { AccordionPanelHeadingDirective } from './accordion-panel-heading.directive';
import { AccordionPanelContentDirective } from './accordion-panel-content.directive';
import { AccordionService } from './accordion.service';

@Directive({
    selector: 'accordion-panel',
})

export class AccordionPanelDirective implements OnInit, AfterContentChecked {
    private _isOpen = false;
    @Input()
    id: string;

    @Input()
    heading: string;

    @Input()
    type: string;

    @Input()
    disabled = false;

    @Input()
    set isOpen(value: boolean) {
        this._isOpen = value;
    }

    get isOpen() {
        return this._isOpen;
    }

    titleTpl: AccordionPanelHeadingDirective | null;
    contentTpl: AccordionPanelContentDirective | null;

    @ContentChildren(AccordionPanelHeadingDirective, {descendants: false}) titleTpls: QueryList<AccordionPanelHeadingDirective>;
    @ContentChildren(AccordionPanelContentDirective, {descendants: false}) contentTpls: QueryList<AccordionPanelContentDirective>;

    constructor(private $accordionService: AccordionService) {
    }

    ngOnInit() {
        if (!this.id) {
            this.id = `accordion-panel-${this.$accordionService.nextId++}`;
        }
    }

    ngAfterContentChecked() {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    }
}
