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

    createSuccessNotification(message = '', timeout) {
        this._notificationService.success(message, timeout);
    }

    createErrorNotification(message = '') {
        this._notificationService.error(message);
    }

    createInfoNotification(message = '') {
        this._notificationService.info(message);
    }

    createWarningNotification(message = '') {
        this._notificationService.warn(message);
    }

    clearNotification() {
        this._notificationService.clear();
    }
}
