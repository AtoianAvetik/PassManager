import { Directive, ElementRef, forwardRef, Inject } from '@angular/core';
import { NgcDropdownAnchorDirective } from './dropdown-anchor.directive';
import { NgcDropdownDirective } from './dropdown';

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgcDropdownAnchorDirective as an
 * alternative.
 */
@Directive( {
    selector: '[ngcDropdownToggle]',
    host: {
        'class': 'dropdown-toggle',
        'aria-haspopup': 'true',
        '[attr.aria-expanded]': 'dropdown.isOpen()',
        '(click)': 'toggleOpen()'
    },
    providers: [{ provide: NgcDropdownAnchorDirective, useExisting: forwardRef( () => NgcDropdownToggleDirective ) }]
} )
export class NgcDropdownToggleDirective extends NgcDropdownAnchorDirective {
    constructor( @Inject( forwardRef( () => NgcDropdownDirective ) ) dropdown, elementRef: ElementRef<HTMLElement> ) {
        super( dropdown, elementRef );
    }

    toggleOpen() {
        this.dropdown.toggle();
    }
}
