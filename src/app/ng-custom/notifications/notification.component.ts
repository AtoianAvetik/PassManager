import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs/Subject';

import { NgcNotificationService } from './notification.service';

@Component( {
    selector: 'ngc-notification',
    template: `
        <div
            (mouseenter)="onMouseenter()" (mouseleave)="onMouseleave()"
            class="notification show {{ typeClass }} {{ aside ? 'with-aside' : '' }}">
            <div class="notification-progress-bar"></div>
            <div *ngIf="aside" class="notification-aside" [innerHtml]="aside"></div>
            <div class="notification-inner">
                <div class="notification-header">
                    <span class="notification-title" [innerHtml]="title"></span>
                    <button (click)="closeNotification()" class="notification-close"><i class="ft-x"></i></button>
                </div>
                <div class="notification-body" [innerHtml]="message"></div>
            </div>
        </div>

    `,
    animations: [
        trigger( 'flyInOut', [
            transition( 'void => *', [
                style( { transform: 'translateX(-100%)', opacity: 0 } ),
                animate( 150 )
            ] ),
            transition( '* => void', [
                animate( 250, style( { transform: 'translateX(100%)', opacity: 0 } ) )
            ] )
        ] )
    ]
} )
export class NgcNotificationComponent implements OnInit, AfterViewInit {
    @HostBinding( '@flyInOut' ) animation = true;
    @HostBinding( 'style.display' ) display = 'block';
    @Input() type: any;
    @Input() typeClass: string;
    @Input() title: string;
    @Input() message: string;
    @Input() aside = false;
    @Input() timeout: any;
    @Input() _ref: any;
    timer = new Subject<number>();
    progressBar: ElementRef;
    interval;
    progress = 0;
    lastProgress = 0;

    private _resolve: (result?: any) => void;
    private _reject: (reason?: any) => void;
    /**
     * A promise that is resolved when the notification is closed
     */
    result: Promise<any>;

    constructor( private notificationService: NgcNotificationService,
                 private elRef: ElementRef ) {
        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    ngOnInit() {
        if ( this.timeout > 0 ) {
            this.initProgressBar();
        }

        if ( this.type || this.type === 0 ) {
            this.typeClass = this.notificationService.getInfo( this.type, 'typeClass' );

            if ( !this.aside ) {
                this.aside = this.notificationService.getInfo( this.type, 'aside' );
            }
        }
    }

    ngAfterViewInit() {
        this.timeout && this.timer.next();
    }

    initProgressBar() {
        const k = this.timeout / 100;
        this.progressBar = this.elRef.nativeElement.querySelector( '.notification-progress-bar' );
        const sub = this.timer.subscribe(
            () => {
                const started = new Date().getTime();
                this.interval = setInterval( () => {
                    const curTime = new Date().getTime();
                    this.progress = this.lastProgress + (curTime - started) / k;
                    if ( this.progress >= 100 ) {
                        clearInterval( this.interval );
                        sub.unsubscribe();
                        this._ref.destroy();
                    } else {
                        this.progressBar['style'].width = this.progress + '%';
                    }
                }, 0 );
            }
        );
    }

    closeNotification() {
        this._resolve();
        clearInterval( this.interval );
        this._ref.destroy();
    }

    onMouseenter() {
        clearInterval( this.interval );
        this.lastProgress = this.progress;
    }

    onMouseleave() {
        this.timer.next();
    }
}
