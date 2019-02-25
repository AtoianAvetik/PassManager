import { Directive, HostListener, Input } from '@angular/core';

import { CollapseService } from './collapse.service';


@Directive( {
    selector: '[collapseTrigger]'
} )
export class CollapseTriggerDirective {
    @Input( 'collapseTrigger' ) id: any;
    @Input() disabled = false;
    @HostListener( 'click' )
    onClick() {
        event.preventDefault();
        event.stopPropagation();

        this.toggle();
    }

    constructor( private $collapseService: CollapseService ) {
    }

    toggle() {
        if ( this.disabled ) {
            return;
        }

        if ( Array.isArray(this.id) ) {
            this.id.forEach(id => {
                this.$collapseService.toggle( id );
            });
        } else {
            this.$collapseService.toggle( this.id );
        }
    }
}
