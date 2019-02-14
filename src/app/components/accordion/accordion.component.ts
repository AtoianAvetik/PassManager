import {
    AfterContentInit,
    Component,
    ContentChildren,
    forwardRef,
    Input, OnChanges,
    QueryList,
    ViewEncapsulation
} from '@angular/core';

import { AccordionGroupComponent } from './accordion-group.component';
import { Subscription } from 'rxjs/Subscription';
import { AccordionService } from './accordion.service';

@Component( {
    selector: 'accordion',
    template: `
        <div aria-multiselectable="true">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./accordion.component.scss'],
    providers: [AccordionService],
    encapsulation: ViewEncapsulation.None
} )

export class AccordionComponent implements AfterContentInit, OnChanges {
    @Input()
    closeOthers = true;

    @Input()
    showArrows = false;

    @Input()
    expandAll = false;

    @Input()
    openedAccordion: string;

    @ContentChildren( forwardRef( () => AccordionGroupComponent ) )
    groups: QueryList<AccordionGroupComponent>;

    /**
     * We need to save old groups to make difference and find newly changed group, to toggle them.
     */
    private oldGroups: AccordionGroupComponent[];

    private subscription: Subscription;

    constructor() {
    }

    ngAfterContentInit() {
        this.setOptions( this.groups.toArray() );
        this.toggleAll( this.expandAll );
        if ( this.expandAll ) {
            // this.closeOthers = false;
            this.oldGroups = this.groups.toArray();
            this.toggleAll( true, this.oldGroups );

            // we subscribe for changes, and if new groups are added we open them automatically
            this.subscription = this.groups.changes.subscribe( change => {
                const newGroups = this.groups.toArray().filter( group => {
                    return this.oldGroups.indexOf( group ) === -1;
                } );
                this.toggleAll( true, newGroups );

                this.oldGroups = this.groups.toArray();
            } );
        }
        if (this.openedAccordion) {
            this.toggle(this.openedAccordion);
        }
    }

    ngOnChanges(simpleChange) {
        if ( simpleChange.openedAccordion && simpleChange.openedAccordion.currentValue && this.groups ) {
            this.toggle(this.openedAccordion);
        }
    }

    toggle( id: string ) {
        this.groups.toArray().forEach( group => {
            (group.id === id && !group.isOpen) && group.toggle();
        } );
    }

    setOptions(groups) {
        groups.forEach( group => {
            group.closeOthers = this.closeOthers;
            group.showArrows = this.showArrows;
        } );
    }

    toggleAll( state?: boolean, groups = this.groups.toArray() ) {
        groups.forEach( group => {
            if ( state !== undefined ) {
                group.isOpen = state;
            } else {
                group.toggle();
            }
        } );
    }
}
