import { Directive, HostListener, Input } from '@angular/core';

import { NgcModalService } from './modal.service';

@Directive( {
    selector: '[ngcModalOpen]'
} )
export class NgcModalOpenDirective {
    @Input( 'ngcModalOpen' ) id: string;

    constructor( private _modalService: NgcModalService ) {
    }

    @HostListener( 'click' )
    onClick() {
        this._modalService.openModal( this.id );
    }
}
