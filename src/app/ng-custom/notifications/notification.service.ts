import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { NgcNotification, NgcNotificationType } from './notification.model';

@Injectable({
    providedIn: 'root'
})
export class NgcNotificationService {
    private subject = new Subject<NgcNotification>();
    private timeout = 2500;
    notificationsData = {
        success: {
            typeClass: 'success',
            iconClass: 'ft-check',
            title: 'Success'
        },
        error: {
            typeClass: 'danger',
            iconClass: 'ft-x',
            title: 'Error'
        },
        info: {
            typeClass: 'info',
            iconClass: 'ft-info',

            title: 'Notification'
        },
        warning: {
            typeClass: 'warning',
            iconClass: 'ft-alert-triangle',
            title: 'Attention'
        },
    };

    constructor() {
    }

    getNotification(): Observable<any> {
        return this.subject.asObservable();
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

    success( message: string, timeout = this.timeout ) {
        this.notification( NgcNotificationType.Success, message, timeout );
    }

    error( message: string, timeout = this.timeout ) {
        this.notification( NgcNotificationType.Error, message, timeout );
    }

    info( message: string, timeout = this.timeout ) {
        this.notification( NgcNotificationType.Info, message, timeout );
    }

    warn( message: string, timeout = this.timeout ) {
        this.notification( NgcNotificationType.Warning, message, timeout );
    }

    notification( type: NgcNotificationType, message: string, timeout: number ) {
        this.subject.next( <NgcNotification>{ type: type, message: message, timeout: timeout } );
    }

    clear() {
        // clear alerts
        this.subject.next();
    }
}
