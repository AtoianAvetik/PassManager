import { Directive, ElementRef, forwardRef, HostBinding, HostListener } from '@angular/core';
import { NgcDropdownAnchorDirective } from './dropdown-anchor.directive';
import { NgcDropdownService } from './dropdown.service';

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgcDropdownAnchorDirective as an
 * alternative.
 */
@Directive( {
    selector: '[ngcDropdownToggle]',
    providers: [{ provide: NgcDropdownAnchorDirective, useExisting: forwardRef( () => NgcDropdownToggleDirective ) }]
} )
export class NgcDropdownToggleDirective extends NgcDropdownAnchorDirective {

    @HostBinding( 'class.dropdown-toggle' ) class = true;
    @HostBinding( 'attr.aria-haspopup.true' ) ariaHaspopup = true;
    @HostBinding( 'attr.aria-expanded' ) ariaExpanded = this.$dropdownService.isOpen();

    @HostListener( 'click' ) onClick() {
        this.toggleOpen();
    }

    constructor( elementRef: ElementRef<HTMLElement>, $dropdownService: NgcDropdownService ) {
        super( elementRef, $dropdownService );
    }

    toggleOpen() {
        this.$dropdownService.onToggleChange.next();
    }
}
