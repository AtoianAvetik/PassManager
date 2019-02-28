import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter, HostBinding,
    Input,
    OnChanges,
    OnInit,
    Output,
    Renderer2,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';

import { NgcAlertConfig } from './alert-config';

/**
 * Alerts can be used to provide feedback messages.
 */
@Component( {
    selector: 'ngc-alert',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <button *ngIf="dismissible" type="button" class="close" aria-label="Close" i18n-aria-label="@@ngb.alert.close"
                (click)="closeHandler()">
            <span aria-hidden="true">&times;</span>
        </button>
        <ng-content></ng-content>
    `,
    styleUrls: ['./alert.scss']
} )
export class NgcAlert implements OnInit, OnChanges {
    /**
     * A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a
     * form of an ×) will be displayed.
     */
    @Input() dismissible: boolean;
    /**
     * Alert type (CSS class). System recognizes the following bg's: "primary", "secondary", "success", "danger", "warning", "info", "light" , "dark"
     *  and other utilities bg's
     */
    @Input() type: string;
    /**
     * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
     */
    @Output() close = new EventEmitter<void>();

    @HostBinding('class.alert') class = true;
    @HostBinding('class.alert-dismissible') alertDismissible = this.dismissible;

    constructor( config: NgcAlertConfig, private _renderer: Renderer2, private _element: ElementRef ) {
        this.dismissible = config.dismissible;
        this.type = config.type;
    }

    closeHandler() {
        this.close.emit( null );
    }

    ngOnChanges( changes: SimpleChanges ) {
        const typeChange = changes['type'];
        if ( typeChange && !typeChange.firstChange ) {
            this._renderer.removeClass( this._element.nativeElement, `alert-${typeChange.previousValue}` );
            this._renderer.addClass( this._element.nativeElement, `alert-${typeChange.currentValue}` );
        }
    }

    ngOnInit() {
        this._renderer.addClass( this._element.nativeElement, `alert-${this.type}` );
    }
}
