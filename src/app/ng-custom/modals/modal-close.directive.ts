import { Directive, HostListener, Input } from '@angular/core';

import { NgcModalService } from './modal.service';

@Directive( {
    selector: '[ngcModalClose]'
} )
export class NgcModalCloseDirective {
    @Input( 'ngcModalClose' ) id: string;

    constructor( private _modalService: NgcModalService ) {
    }

    @HostListener( 'click' )
    onClick() {
        this._modalService.closeModal( this.id );
    }
}
