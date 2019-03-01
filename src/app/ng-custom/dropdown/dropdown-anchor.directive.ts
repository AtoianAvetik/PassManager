import { Directive, ElementRef, HostBinding } from '@angular/core';
import { NgcDropdownService } from './dropdown.service';

/**
 * Marks an element to which dropdown menu will be anchored. This is a simple version
 * of the NgcDropdownToggleDirective directive. It plays the same role as NgcDropdownToggleDirective but
 * doesn't listen to click events to toggle dropdown menu thus enabling support for
 * events other than click.
 *
 * @since 1.1.0
 */
@Directive( {
    selector: '[ngcDropdownAnchor]'
} )
export class NgcDropdownAnchorDirective {
    anchorEl;

    @HostBinding( 'class.dropdown-toggle' ) class = true;
    @HostBinding( 'attr.aria-haspopup.true' ) ariaHaspopup = true;
    @HostBinding( 'attr.aria-expanded' ) ariaExpanded = this.$dropdownService.isOpen();

    constructor( private _elementRef: ElementRef<HTMLElement>,
                 public $dropdownService: NgcDropdownService ) {
        this.anchorEl = _elementRef.nativeElement;
    }

    getNativeElement() {
        return this._elementRef.nativeElement;
    }
}
