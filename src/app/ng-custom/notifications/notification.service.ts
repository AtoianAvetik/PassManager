import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';

import { NgcNotification, NgcNotificationType } from './notification.model';
import { NgcNotificationStack } from './notification-stack';

@Injectable({
    providedIn: 'root'
})
export class NgcNotificationService {
    timeout = 2500;
    notificationsData = {
        success: {
            typeClass: 'notification-success',
            aside: '<i class="ft-check"></i>'
        },
        error: {
            typeClass: 'notification-danger',
            aside: '<i class="ft-x"></i>'
        },
        info: {
            typeClass: 'notification-info',
            aside: '<i class="ft-info"></i>'
        },
        warning: {
            typeClass: 'notification-warning',
            aside: '<i class="ft-alert-triangle"></i>'
        },
    };

    constructor(private stack: NgcNotificationStack,
                private _moduleCFR: ComponentFactoryResolver) {
    }

    getInfo( type, kind ) {
        if ( !kind ) {
            return;
        }

        // return css class based on notification type
        switch ( type ) {
            case NgcNotificationType.Success:
                return this.notificationsData.success[kind];
            case NgcNotificationType.Error:
                return this.notificationsData.error[kind];
            case NgcNotificationType.Info:
                return this.notificationsData.info[kind];
            case NgcNotificationType.Warning:
                return this.notificationsData.warning[kind];
        }
    }

    success( data ) {
        this.notification( Object.assign({}, { type: NgcNotificationType.Success}, data) );
    }

    error( data ) {
        this.notification( Object.assign({}, { type: NgcNotificationType.Error}, data) );
    }

    info( data ) {
        this.notification( Object.assign({}, { type: NgcNotificationType.Info}, data) );
    }

    warn( data ) {
        this.notification( Object.assign({}, { type: NgcNotificationType.Warning}, data) );
    }

    notification( data ) {
        const combinedOptions = <NgcNotification>Object.assign({}, { timeout: this.timeout }, data);
        this.stack.show( this._moduleCFR, combinedOptions);
    }

    clear() {
        // clear alerts
        this.stack.clearAll();
    }
}
