import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcAccordionComponent } from './accordion.component';
import { NgcAccordionPanelDirective } from './accordion-panel.directive';
import { NgcAccordionPanelTitleDirective } from './accordion-panel-title.directive';
import { NgcAccordionPanelContentDirective } from './accordion-panel-content.directive';

export { NgcAccordionComponent } from './accordion.component';
export { NgcAccordionPanelDirective } from './accordion-panel.directive';
export { NgcAccordionPanelTitleDirective } from './accordion-panel-title.directive';
export { NgcAccordionPanelContentDirective } from './accordion-panel-content.directive';
export { NgcAccordionConfig } from './accordion-config';

const NGC_ACCORDION_DIRECTIVES =
    [NgcAccordionComponent, NgcAccordionPanelDirective, NgcAccordionPanelTitleDirective, NgcAccordionPanelContentDirective];

@NgModule( {
    declarations: NGC_ACCORDION_DIRECTIVES,
    exports: NGC_ACCORDION_DIRECTIVES,
    imports: [CommonModule]
} )
export class NgcAccordionModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcAccordionModule };
    }
}
