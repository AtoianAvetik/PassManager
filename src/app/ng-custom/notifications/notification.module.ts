import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcNotificationService } from './notification.service';
import { NgcNotificationStack } from './notification-stack';
import { NgcNotificationComponent } from './notification.component';

export { NgcNotificationService } from './notification.service';
export { NgcNotificationStack } from './notification-stack';
export { NgcNotificationComponent } from './notification.component';
export { NgcNotification } from './notification.model';

const NGC_MODAL_DIRECTIVES = [
    NgcNotificationComponent
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
