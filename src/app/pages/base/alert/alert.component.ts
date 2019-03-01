import { Component } from '@angular/core';

interface Alert {
    icon?: string;
    type: string;
    message: string;
}

const ALERTS: Alert[] = [
    {
        type: 'primary',
        message: 'This is a primary alert',
        icon: 'ft-alert-triangle'
    },
    {
        type: 'secondary',
        message: 'This is a secondary alert',
        icon: 'ft-help-circle'
    },
    {
        type: 'success',
        message: 'This is an success alert',
        icon: 'ft-alert-triangle'
    },
    {
        type: 'info',
        message: 'This is an info alert',
        icon: 'ft-help-circle'
    },
    {
        type: 'warning',
        message: 'This is a warning alert',
        icon: 'ft-alert-triangle'
    },
    {
        type: 'danger',
        message: 'This is a danger alert',
        icon: 'ft-help-circle'
    },
    {
        type: 'light',
        message: 'This is a light alert',
        icon: 'ft-alert-triangle'
    },
    {
        type: 'dark',
        message: 'This is a dark alert',
        icon: 'ft-help-circle'
    }
];

@Component( {
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
} )

export class AlertComponent {
    alerts = Array.from(ALERTS);
    alertsWithIcons = Array.from(ALERTS);
    alertsWithIconsAndDissmiss = Array.from(ALERTS);
    alertsOutlineWithIconsAndDissmiss = Array.from(ALERTS);

    close(array: Alert[], alert: Alert) {
        array.splice(array.indexOf(alert), 1);
    }

    reset() {
        return Array.from(ALERTS);
    }
}
