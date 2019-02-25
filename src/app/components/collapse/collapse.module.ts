import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseDirective } from './collapse.directive';
import { CollapseService } from './collapse.service';
import { CollapseTriggerDirective } from './collapse-trigger.directive';

@NgModule({
    exports: [
        CollapseDirective,
        CollapseTriggerDirective
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        CollapseDirective,
        CollapseTriggerDirective
    ],
    providers: [CollapseService],
})
export class CollapseModule {
}
