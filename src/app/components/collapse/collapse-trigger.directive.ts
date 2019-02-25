import { Directive, HostListener, Input } from '@angular/core';

import { CollapseService } from './collapse.service';


@Directive( {
    selector: '[collapseTrigger]'
} )
export class CollapseTriggerDirective {
    @Input( 'collapseTrigger' ) id: any;

    constructor( private $collapseService: CollapseService ) {
    }

    @HostListener( 'click' )
    onClick() {
        if ( Array.isArray(this.id) ) {
            this.id.forEach(id => {
                this.$collapseService.collapse( id );
            });
        } else {
            this.$collapseService.collapse( this.id );
        }
    }
}
