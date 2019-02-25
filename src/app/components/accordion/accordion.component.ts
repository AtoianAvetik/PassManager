import {
    Component,
    ContentChildren, EventEmitter, HostBinding,
    Input, Output,
    QueryList,
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { AccordionPanelDirective } from './accordion-panel.directive';
import { AccordionService } from './accordion.service';

@Component({
    selector: 'accordion',
    template: `
        <ng-template ngFor let-panel [ngForOf]="panels">
            <div class="card">
                <div (click)="toggle(panel.id)">
                    <div *ngIf="panel.heading" [class]="'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')">
                        <div class="card-title">
                            {{panel.heading}}
                        </div>
                    </div>
                    <ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
                </div>
                <div [@slide]="panel.isOpen ? 'down' : 'up'">
                    <ng-container *ngIf="!panel.contentTpl">
                        <ng-content></ng-content>
                    </ng-container>
                    <div class="card-body" *ngIf="panel.contentTpl">
                        <div class="card-section">
                            <ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef"></ng-template>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    animations: [
        trigger('slide', [
            state('down', style({height: '*', display: 'block'})),
            state('up', style({height: 0, display: 'none'})),
            transition('up => down', animate('300ms')),
            transition('down => up', animate('300ms'))
        ])
    ],
    providers: [AccordionService]
})

export class AccordionComponent {
    @ContentChildren(AccordionPanelDirective) panels: QueryList<AccordionPanelDirective>;

    @Input()
    closeOthers = true;

    @Input()
    expandAll = false;

    /**
     * An array or comma separated strings of panel identifiers that should be opened
     */
    @Input() activeIds: string | string[] = [];

    /**
     *  Accordion's types of panels to be applied globally.
     *  System recognizes the following types: "primary", "secondary", "success", "danger", "warning", "info", "light" , "dark
     *  and other utilities bg's
     */
    @Input() type: string;

    /**
     * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
     */
    @Output() panelChange = new EventEmitter<any>();

    @HostBinding('class') class = 'accordion';

    constructor() {
    }

    /**
     * Programmatically toggle a panel with a given id. Has no effect if the panel is disabled.
     */
    toggle(panelId: string) {
        const panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    }

    /**
     * Toggle all panels.
     */
    toggleAll(nextState?: boolean) {
        this.panels.forEach((panel) => {
            this._changeOpenState(panel, typeof nextState === 'boolean' ? nextState : !panel.isOpen);
        });
    }

    private _changeOpenState(panel: AccordionPanelDirective, nextState: boolean) {
        if (panel && !panel.disabled && panel.isOpen !== nextState) {
            this.panelChange.emit({panelId: panel.id, nextState: nextState});

            panel.isOpen = nextState;

            if (nextState && this.closeOthers) {
                this._closeOthers(panel.id);
            }
            this._updateActiveIds();
        }
    }

    private _closeOthers(panelId: string) {
        this.panels.forEach(panel => {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        });
    }

    private _findPanelById(panelId: string): AccordionPanelDirective | null {
        return this.panels.find(p => p.id === panelId);
    }

    private _updateActiveIds() {
        this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
    }
}
