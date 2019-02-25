import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CollapseService } from './collapse.service';

@Component({
    selector: '[collapse]',
    animations: [
        trigger( 'slide', [
            state( 'down', style( { overflow: 'hidden', height: '*', paddingTop: '*', paddingBottom: '*', display: 'block' } ) ),
            state( 'up', style( { overflow: 'hidden', height: 0, paddingTop: 0, paddingBottom: 0, display: 'none' } ) ),
            transition( 'up => down', animate( '300ms' ) ),
            transition( 'down => up', animate( '300ms' ) )
        ] )
    ],
    template: `
        <ng-content></ng-content>`,
})
export class CollapseDirective {
    private _status: boolean;
    get status(): boolean {
        return this._status;
    }
    set status(status: boolean) {
        this._status = status;
        this.trigger = status ? 'down' : 'up';
    }
    @Input('collapse') id: string;
    @HostBinding('@slide') trigger = status ? 'down' : 'up';

    constructor(private elRef: ElementRef,
                private $collapseService: CollapseService) {
        this.$collapseService.isCollapseTriggered.subscribe(id => {
            if ( id === this.id ) {
                this.status = !this.status;
            }
        });
    }
}
