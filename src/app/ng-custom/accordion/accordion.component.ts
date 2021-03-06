import {
    Component,
    ContentChildren, EventEmitter, HostBinding,
    Input, OnInit, Output,
    QueryList,
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { NgcAccordionPanelDirective } from './accordion-panel.directive';
import { NgcAccordionService } from './accordion.service';
import { NgcAccordionConfig } from './accordion-config';

@Component({
    selector: 'accordion',
    template: `
        <ng-template ngFor let-panel [ngForOf]="panels">
            <div [class]="'accordion-panel ' + (panel.isOpen ? 'expanded' : '')">
                <div (click)="toggle(panel.id)"
                     [class]="'accordion-panel_header ' + (panel.bg ? 'bg-'+panel.bg: bg ? 'bg-'+bg : '') + ' ' + (panel.isOpen ? 'expanded' : '')">
                    <div *ngIf="panel.title" class="accordion-panel_title">
                        {{panel.title}}
                    </div>
                    <div *ngIf="!panel.title">
                        <ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
                    </div>
                </div>
                <div [@slide]="panel.isOpen ? 'down' : 'up'"
                     class="accordion-panel_body">
                    <div *ngIf="panel.contentTpl">
                        <ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef"></ng-template>
                    </div>
                    <ng-content></ng-content>
                </div>
            </div>
        </ng-template>
    `,
    animations: [
        trigger('slide', [
            state('down', style({height: '*', paddingTop: '*', paddingBottom: '*', display: 'block'})),
            state('up', style({height: 0, paddingTop: 0, paddingBottom: 0,  display: 'none'})),
            transition('up => down', animate('350ms ease-out')),
            transition('down => up', animate('350ms ease-out'))
        ])
    ],
    providers: [NgcAccordionService]
})

export class NgcAccordionComponent implements OnInit {
    @ContentChildren(NgcAccordionPanelDirective) panels: QueryList<NgcAccordionPanelDirective>;

    @Input()
    closeOthers = true;

    @Input()
    expandAll = false;

    /**
     * An array or comma separated strings of panel identifiers that should be opened
     */
    @Input() activeIds: string | string[] = [];

    /**
     *  Accordion's types of panels.
     *  System recognizes the following types: "light" and "outline"
     */
    @Input() type: string;

    /**
     *  Accordion's bg's of panels to be applied globally.
     *  System recognizes the following bg's: "primary", "secondary", "success", "danger", "warning", "info", "light" , "dark"
     *  and other utilities bg's
     */
    @Input() bg: string;

    /**
     * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
     */
    @Output() panelChange = new EventEmitter<any>();

    @HostBinding('class') class = 'accordion';

    constructor(config: NgcAccordionConfig) {
        this.type = config.type;
        this.bg = config.bg;
        this.closeOthers = config.closeOthers;
    }

    ngOnInit(): void {
        this.class = this.class + (this.type ? ' accordion-' + this.type : '');
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

    private _changeOpenState(panel: NgcAccordionPanelDirective, nextState: boolean) {
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

    private _findPanelById(panelId: string): NgcAccordionPanelDirective | null {
        return this.panels.find(p => p.id === panelId);
    }

    private _updateActiveIds() {
        this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
    }
}
