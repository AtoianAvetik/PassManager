import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcNotificationService } from './notification.service';
import { NgcNotificationComponent } from './notification.component';
import { NgcNotificationsComponent } from './notifications.component';

export { NgcNotificationService } from './notification.service';
export { NgcNotificationComponent } from './notification.component';
export { NgcNotificationsComponent } from './notifications.component';
export { NgcNotification } from './notification.model';

const NGC_MODAL_DIRECTIVES = [
    NgcNotificationComponent, NgcNotificationsComponent
];

@NgModule( {
    declarations: [NGC_MODAL_DIRECTIVES],
    exports: [NGC_MODAL_DIRECTIVES],
    imports: [CommonModule],
    entryComponents: [NgcNotificationComponent]
} )
export class NgcNotificationModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcNotificationModule };
    }
}
