import { Component } from '@angular/core';

import { NgcNotificationService } from '../../../ng-custom';


@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent {
    constructor(private _notificationService: NgcNotificationService) {
    }

    // Notifications

    createNotification(message = '', title = '', timeout = null, typeClass = '', aside = '') {
        this._notificationService.notification({ message, title, timeout, typeClass, aside});
    }

    createSuccessNotification(message = '', title = '', timeout = null) {
        this._notificationService.success({ message, title, timeout });
    }

    createErrorNotification(message = '', title = '') {
        this._notificationService.error({ message, title });
    }

    createInfoNotification(message = '', title = '') {
        this._notificationService.info({ message, title });
    }

    createWarningNotification(message = '', title = '') {
        this._notificationService.warn({ message, title });
    }

    clearNotification() {
        this._notificationService.clear();
    }
}
