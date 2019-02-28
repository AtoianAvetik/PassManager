import {
    AfterContentChecked,
    ContentChildren, Directive,
    Input, OnInit,
    QueryList,
} from '@angular/core';

import { NgcAccordionPanelTitleDirective } from './accordion-panel-title.directive';
import { NgcAccordionPanelContentDirective } from './accordion-panel-content.directive';
import { NgcAccordionService } from './accordion.service';

@Directive({
    selector: 'accordion-panel',
})

export class NgcAccordionPanelDirective implements OnInit, AfterContentChecked {
    private _isOpen = false;
    @Input()
    id: string;

    @Input()
    title: string;

    @Input()
    bg: string;

    @Input()
    disabled = false;

    @Input()
    set isOpen(value: boolean) {
        this._isOpen = value;
    }

    get isOpen() {
        return this._isOpen;
    }

    titleTpl: NgcAccordionPanelTitleDirective | null;
    contentTpl: NgcAccordionPanelContentDirective | null;

    @ContentChildren(NgcAccordionPanelTitleDirective, {descendants: false}) titleTpls: QueryList<NgcAccordionPanelTitleDirective>;
    @ContentChildren(NgcAccordionPanelContentDirective, {descendants: false}) contentTpls: QueryList<NgcAccordionPanelContentDirective>;

    constructor(private $accordionService: NgcAccordionService) {
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
