import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcCollapseService } from './collapse.service';
import { NgcCollapseDirective } from './collapse.directive';
import { NgcCollapseTriggerDirective } from './collapse-trigger.directive';

export { NgcCollapseService } from './collapse.service';
export { NgcCollapseDirective } from './collapse.directive';
export { NgcCollapseTriggerDirective } from './collapse-trigger.directive';

const NGC_COLLAPSE_DIRECTIVES = [NgcCollapseDirective, NgcCollapseTriggerDirective];

@NgModule( {
    declarations: NGC_COLLAPSE_DIRECTIVES,
    exports: NGC_COLLAPSE_DIRECTIVES,
    imports: [CommonModule],
    providers: [NgcCollapseService],
} )
export class NgcCollapseModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcCollapseModule };
    }
}
