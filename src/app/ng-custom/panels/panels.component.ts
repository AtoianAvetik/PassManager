import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { NgcPanelService } from './panel.service';
import { NgcPanelComponent } from './panel.component';

@Component( {
    selector: 'ngc-panels',
    template: `
        <div class="panel-container"></div>
        <div
            *ngIf="overlay"
            (click)="onClickOutside($event)"
            class="panel-overlay"
            [@overlay]='isOpen ? "open" : "close"'>
        </div>
    `,
    animations: [
        trigger( 'overlay', [
            state( 'open', style( { opacity: 1 } ) ),
            state( 'close', style( { opacity: 0, display: 'none' } ) ),
            transition( 'close => open', animate( '300ms' ) ),
            transition( 'open => close', animate( '300ms' ) )
        ] )
    ]
} )
export class NgcPanelsComponent implements OnInit, OnDestroy {
    @Input() overlay = true;
    @Input() leftPanelExpand = new Subject<boolean>();
    @Input() leftPanelHide = new Subject<boolean>();
    @Input() rightPanelExpand = new Subject<boolean>();
    @Input() rightPanelHide = new Subject<boolean>();
    subscriptions: Array<Subscription> = [];
    private _isOpen = false;

    @HostListener( 'document:click', ['$event'] )
    onClick( event ) {
        this.onClickOutside( event );
    }

    @Input()
    set isOpen( value: boolean ) {
        this._isOpen = value;
    }

    get isOpen() {
        return this._isOpen;
    }

    constructor( private _panelService: NgcPanelService,
                 private elRef: ElementRef ) {
        this.subscriptions.push( this._panelService.isPanelsChanged.subscribe(
            ( data: Array<NgcPanelComponent> ) => {
                (data.length < 1) && (this.isOpen = false);
                console.log( data );
                for ( const panel of data ) {
                    this.elRef.nativeElement.querySelector( '.panel-container' ).appendChild( panel.el.nativeElement );
                }
            }
            )
        );
    }

    ngOnInit() {
        this.subscriptions.push( this._panelService.panelOpeningDidStart.subscribe( _ => this.isOpen = true ) );
        this.subscriptions.push( this._panelService.panelClosingDidStart.subscribe(
            () => {
                !this._panelService.activePanels.length && (this.isOpen = false);
            }
            )
        );

        // Subscribe state events
        this.subscriptions.push( this.leftPanelExpand.subscribe( status => this._panelService.stateEvents.left.expand.next( status ) ) );
        this.subscriptions.push( this.leftPanelHide.subscribe( status => this._panelService.stateEvents.left.hide.next( status ) ) );
        this.subscriptions.push( this.rightPanelExpand.subscribe( status => this._panelService.stateEvents.right.expand.next( status ) ) );
        this.subscriptions.push( this.rightPanelHide.subscribe( status => this._panelService.stateEvents.right.hide.next( status ) ) );
    }

    ngOnDestroy() {
        this.subscriptions.forEach( ( subscription: Subscription ) => {
            subscription.unsubscribe();
        } );
    }

    onClickOutside( e ) {
        if ( !e.target.closest( 'ngc-panel' ) ) {
            this._panelService.closePanel();
        }
    }
}
