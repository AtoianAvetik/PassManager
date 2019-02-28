import { Directive, HostListener, Input } from '@angular/core';

import { NgcPanelService } from './panel.service';

@Directive( {
    selector: '[ngcPanelClose]'
} )
export class NgcPanelCloseDirective {
    @Input( 'ngcPanelClose' ) id: string;

    constructor( private _panelService: NgcPanelService ) {
    }

    @HostListener( 'click', ['$event'] )
    onClick( e ) {
        e.stopPropagation();
        this._panelService.closePanel( this.id );
    }
}
