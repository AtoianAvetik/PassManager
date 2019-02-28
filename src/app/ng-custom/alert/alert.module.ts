import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcAlert } from './alert';

export { NgcAlert } from './alert';
export { NgcAlertConfig } from './alert-config';

@NgModule( { declarations: [NgcAlert], exports: [NgcAlert], imports: [CommonModule], entryComponents: [NgcAlert] } )
export class NgcAlertModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcAlertModule };
    }
}
