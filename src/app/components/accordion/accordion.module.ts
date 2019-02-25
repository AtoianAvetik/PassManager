import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionPanelDirective } from './accordion-panel.directive';
import { AccordionPanelHeadingDirective } from './accordion-panel-heading.directive';
import { AccordionPanelContentDirective } from './accordion-panel-content.directive';
import { AccordionComponent } from './accordion.component';
import { AccordionService } from './accordion.service';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        AccordionComponent,
        AccordionPanelDirective,
        AccordionPanelHeadingDirective,
        AccordionPanelContentDirective
    ],
    declarations: [
        AccordionComponent,
        AccordionPanelDirective,
        AccordionPanelHeadingDirective,
        AccordionPanelContentDirective
    ],
    providers: [AccordionService],
})
export class AccordionModule {
}
