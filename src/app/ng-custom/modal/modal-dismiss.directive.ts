import { Directive, HostListener, Input } from '@angular/core';

import { NgcModalService } from './modal.service';

@Directive( {
    selector: '[ngcModalDismiss]'
} )
export class NgcModalDismissDirective {
    @Input( 'ngcModalDismiss' ) id: string;

    constructor( private _modalService: NgcModalService ) {
    }

    @HostListener( 'click' )
    onClick() {
        this._modalService.dismissById( this.id );
    }
}
