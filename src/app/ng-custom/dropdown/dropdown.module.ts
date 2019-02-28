import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgcDropdownDirective } from './dropdown';
import { NgcDropdownAnchorDirective } from './dropdown-anchor.directive';
import { NgcDropdownToggleDirective } from './dropdown-toggle.directive';
import { NgcDropdownMenuDirective } from './dropdown-menu.directive';
import { NgcDropdownItemDirective } from './dropdown-item.directive';

export { NgcDropdownDirective } from './dropdown';
export { NgcDropdownAnchorDirective } from './dropdown-anchor.directive';
export { NgcDropdownToggleDirective } from './dropdown-toggle.directive';
export { NgcDropdownMenuDirective } from './dropdown-menu.directive';
export { NgcDropdownItemDirective } from './dropdown-item.directive';
export { NgcDropdownConfig } from './dropdown-config';

const NGC_DROPDOWN_DIRECTIVES = [
    NgcDropdownDirective, NgcDropdownAnchorDirective, NgcDropdownToggleDirective, NgcDropdownMenuDirective, NgcDropdownItemDirective
];

@NgModule( { declarations: NGC_DROPDOWN_DIRECTIVES, exports: NGC_DROPDOWN_DIRECTIVES } )
export class NgcDropdownModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcDropdownModule };
    }
}
