import { ContentChildren, Directive, ElementRef, forwardRef, Inject, QueryList, Renderer2 } from '@angular/core';

import { NgcDropdownItemDirective } from './dropdown-item.directive';
import { NgcDropdownDirective } from './dropdown';
import { Placement, positionElements } from '../util/positioning';


/**
 */
@Directive( {
    selector: '[ngcDropdownMenu]',
    host: { '[class.dropdown-menu]': 'true', '[class.show]': 'dropdown.isOpen()', '[attr.x-placement]': 'placement' }
} )
export class NgcDropdownMenuDirective {
    placement: Placement = 'bottom';
    isOpen = false;

    @ContentChildren( NgcDropdownItemDirective ) menuItems: QueryList<NgcDropdownItemDirective>;

    constructor(
        @Inject( forwardRef( () => NgcDropdownDirective ) ) public dropdown, private _elementRef: ElementRef<HTMLElement>,
        private _renderer: Renderer2 ) {
    }

    getNativeElement() {
        return this._elementRef.nativeElement;
    }

    position( triggerEl, placement ) {
        this.applyPlacement( positionElements( triggerEl, this._elementRef.nativeElement, placement ) );
    }

    applyPlacement( _placement: Placement ) {
        // remove the current placement classes
        this._renderer.removeClass( this._elementRef.nativeElement.parentNode, 'dropup' );
        this._renderer.removeClass( this._elementRef.nativeElement.parentNode, 'dropdown' );
        this.placement = _placement;
        /**
         * apply the new placement
         * in case of top use up-arrow or down-arrow otherwise
         */
        if ( _placement.search( '^top' ) !== -1 ) {
            this._renderer.addClass( this._elementRef.nativeElement.parentNode, 'dropup' );
        } else {
            this._renderer.addClass( this._elementRef.nativeElement.parentNode, 'dropdown' );
        }
    }
}
