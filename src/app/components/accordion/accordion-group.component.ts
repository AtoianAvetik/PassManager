import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccordionService } from './accordion.service';

@Component( {
    selector: 'accordion-group',
    templateUrl: './accordion-group.component.html',
    animations: [
        trigger( 'slide', [
            state( 'down', style( { height: '*', display: 'block' } ) ),
            state( 'up', style( { height: 0, display: 'none' } ) ),
            transition( 'up => down', animate( '300ms' ) ),
            transition( 'down => up', animate( '300ms' ) )
        ] )
    ]
} )

export class AccordionGroupComponent {
    closeOthers = false;
    private _showArrows = false;
    private _isOpen = false;
    @Input()
    id: string;

    @Input()
    heading: string;

    @Input()
    disabled: string;

    set showArrows( value: boolean ) {
        this._showArrows = value;
        this._cdr.detectChanges();
    }
    get showArrows() {
        return this._showArrows;
    }

    @Input()
    set isOpen( value: boolean ) {
        if ( this.disabled ) {
            return;
        }
        this._isOpen = value;
        this._cdr.detectChanges();
    }

    get isOpen() {
        return this._isOpen;
    }

    constructor( private _cdr: ChangeDetectorRef,
                 private $accordion: AccordionService) {
        this.$accordion.onCloseOthers.subscribe(id => {
            this.isOpen = false;
        });
    }

    toggle() {
        if ( this.disabled ) {
            return;
        }

        if ( this.closeOthers ) {
            this.$accordion.onCloseOthers.next(this.id);
        }

        this.isOpen = !this.isOpen;
    }

    onToggleClick( event: MouseEvent ) {
        event.preventDefault();
        event.stopPropagation();

        this.toggle();
    }
}
