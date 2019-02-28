import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

/**
 * A directive you should put put on a dropdown item to enable keyboard navigation.
 * Keyboard navigation using arrow keys will move focus between items marked with this directive.
 */
@Directive({
    selector: '[ngcDropdownItem]'
})
export class NgcDropdownItemDirective {
    private _disabled = false;

    @HostBinding('class.dropdown-item') class = true;
    @HostBinding('class.disabled') classDisabled = true;

    @Input()
    set disabled(value: boolean) {
        this._disabled = <any>value === '' || value === true;  // accept an empty attribute as true
    }

    get disabled(): boolean { return this._disabled; }

    constructor(public elementRef: ElementRef<HTMLElement>) {}
}
