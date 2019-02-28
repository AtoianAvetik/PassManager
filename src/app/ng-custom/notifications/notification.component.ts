import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs/Subject';

import { NgcNotificationService } from './notification.service';

@Component( {
    selector: 'ngc-notification',
    template: `
        <div
            (mouseenter)="onMouseenter()" (mouseleave)="onMouseleave()"
            class="row no-gutters -middle notification -with-icon -dismissable -{{ typeClass }}">
            <div class="notification_progress-bar"></div>
            <div class="notification_icon">
                <i class="{{ iconClass }}"></i>
            </div>
            <div class="notification_inner">
                <p class="notification_title">{{ title }}</p>
                <span class="notification_message">{{ message }}</span>
            </div>
            <button (click)="closeNotification()" class="btn notification_close-btn"><i class="ft-x"></i></button>
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
    @Input() message: string;
    @Input() _ref: any;
    @Input() timeout: any;
    typeClass: string;
    iconClass: string;
    title: string;
    timer = new Subject<number>();
    progressBar: ElementRef;
    interval;
    progress = 0;
    lastProgress = 0;

    constructor( private notificationService: NgcNotificationService,
                 private elRef: ElementRef ) {
    }

    ngOnInit() {
        (this.timeout > 0) && this.initProgressBar();
        this.typeClass = this.notificationService.getInfo( this.type, 'typeClass' );
        this.iconClass = this.notificationService.getInfo( this.type, 'iconClass' );
        this.title = this.notificationService.getInfo( this.type, 'title' );
    }

    ngAfterViewInit() {
        this.timeout && this.timer.next();
    }

    initProgressBar() {
        const k = this.timeout / 100;
        this.progressBar = this.elRef.nativeElement.querySelector( '.notification_progress-bar' );
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
