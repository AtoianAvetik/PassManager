import { Directive, ElementRef, forwardRef, Inject } from '@angular/core';
import { NgcDropdownDirective } from './dropdown';

/**
 * Marks an element to which dropdown menu will be anchored. This is a simple version
 * of the NgcDropdownToggleDirective directive. It plays the same role as NgcDropdownToggleDirective but
 * doesn't listen to click events to toggle dropdown menu thus enabling support for
 * events other than click.
 *
 * @since 1.1.0
 */
@Directive( {
    selector: '[ngcDropdownAnchor]',
    host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
} )
export class NgcDropdownAnchorDirective {
    anchorEl;

    constructor( @Inject( forwardRef( () => NgcDropdownDirective ) ) public dropdown, private _elementRef: ElementRef<HTMLElement> ) {
        this.anchorEl = _elementRef.nativeElement;
    }

    getNativeElement() {
        return this._elementRef.nativeElement;
    }
}
