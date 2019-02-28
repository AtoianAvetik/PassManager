import {
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    ElementRef,
    HostBinding,
    OnInit,
    ViewContainerRef
} from '@angular/core';

import { NgcNotificationService } from './notification.service';
import { NgcNotification } from './notification.model';
import { NgcNotificationComponent } from './notification.component';

@Component( {
    selector: 'ngc-notifications',
    template: `
        <div class="notification-wrapper"></div>
    `
} )
export class NgcNotificationsComponent implements OnInit {
    @HostBinding( 'class.notification-wrap' ) isActive = true;
    componentRef: ComponentRef<NgcNotification>;

    constructor( private notificationService: NgcNotificationService,
                 private resolver: ComponentFactoryResolver,
                 private viewContainerRef: ViewContainerRef,
                 private elRef: ElementRef ) {
    }

    ngOnInit() {
        this.notificationService.getNotification().subscribe( ( notification: NgcNotification ) => {
            if ( !notification ) {
                // clear notifications-page when an empty data is received
                this.viewContainerRef.clear();
                return;
            }

            // create notification
            this.createNotification( notification );
        } );
    }

    createNotification( notification ) {
        const factory: ComponentFactory<NgcNotification> = this.resolver.resolveComponentFactory( NgcNotificationComponent );

        this.componentRef = this.viewContainerRef.createComponent( factory );
        this.componentRef.instance.type = notification.type;
        this.componentRef.instance.message = notification.message;
        this.componentRef.instance.timeout = notification.timeout;
        this.componentRef.instance._ref = this.componentRef;

        this.elRef.nativeElement.querySelector( '.notification-wrapper' ).appendChild( this.componentRef.location.nativeElement );
    }
}
