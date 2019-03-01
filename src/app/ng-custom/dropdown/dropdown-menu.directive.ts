import { ContentChildren, Directive, ElementRef, HostBinding, OnDestroy, QueryList, Renderer2 } from '@angular/core';
import { NgcDropdownItemDirective } from './dropdown-item.directive';
import { Placement, positionElements } from '../util/positioning';

import { NgcDropdownService } from './dropdown.service';
import { Subscription } from 'rxjs';


/**
 */
@Directive( {
    selector: '[ngcDropdownMenu]'
} )
export class NgcDropdownMenuDirective implements OnDestroy {
    placement: Placement = 'bottom';
    isOpen = false;
    isOpenSubscription: Subscription;

    @ContentChildren( NgcDropdownItemDirective ) menuItems: QueryList<NgcDropdownItemDirective>;

    @HostBinding( 'class.dropdown-menu' ) dropdownMenu = true;
    @HostBinding( 'class.show' ) show = false;
    @HostBinding( 'attr.x-placement' ) xPlacement  = this.placement;

    constructor( private _elementRef: ElementRef<HTMLElement>,
                 public $dropdownService: NgcDropdownService,
                 private _renderer: Renderer2 ) {
        this.isOpenSubscription = this.$dropdownService._isOpen.subscribe(status => {
            this.show = status;
        });
    }

    ngOnDestroy(): void {
        this.isOpenSubscription.unsubscribe();
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
