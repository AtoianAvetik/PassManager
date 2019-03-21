import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgcPopover, NgcPopoverWindow } from './popover';
import { CommonModule } from '@angular/common';

export { NgcPopover } from './popover';
export { NgcPopoverConfig } from './popover-config';
export { Placement } from '../util/positioning';

@NgModule( {
    declarations: [NgcPopover, NgcPopoverWindow],
    exports: [NgcPopover],
    imports: [CommonModule],
    entryComponents: [NgcPopoverWindow]
} )
export class NgcPopoverModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcPopoverModule };
    }
}
