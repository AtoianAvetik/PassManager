import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
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
        <div *ngIf="icon" class="alert-icon">
            <i class="{{ icon }}"></i>
        </div>
        <div class="alert-text">
            <ng-content></ng-content>
        </div>
        <div *ngIf="dismissible" class="alert-close">
            <button type="button" class="close" (click)="closeHandler()">
                <span aria-hidden="true">
                    <i class="ft-x"></i>
                </span>
            </button>
        </div>
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
     * Class of icon that will be used in alert
     */
    @Input() icon: string;
    /**
     * Alert type (CSS class). System recognizes the following bg's: "primary", "secondary", "success", "danger", "warning", "info", "light" , "dark"
     *  and other utilities bg's.
     *  And also outline version: "outline-primary", "outline-secondary", "outline-success" etc.
     */
    @Input() type: string;
    /**
     * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
     */
    @Output() close = new EventEmitter<void>();

    @HostBinding( 'class.alert' ) class = true;

    constructor( config: NgcAlertConfig, private _renderer: Renderer2, private _element: ElementRef ) {
        this.dismissible = config.dismissible;
        this.type = config.type;
        this.icon = config.icon;
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
