import { Directive, HostListener, Input } from '@angular/core';

import { NgcPanelService } from './panel.service';

@Directive( {
    selector: '[ngcPanelOpen]'
} )
export class NgcPanelOpenDirective {
    @Input( 'ngcPanelOpen' ) id: string;

    constructor( private _panelService: NgcPanelService ) {
    }

    @HostListener( 'click', ['$event'] )
    onClick( e ) {
        e.stopPropagation();
        this._panelService.openPanel( this.id );
    }
}
