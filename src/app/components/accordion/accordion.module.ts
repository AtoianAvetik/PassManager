import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionPanelDirective } from './accordion-panel.directive';
import { AccordionPanelTitleDirective } from './accordion-panel-title.directive';
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
        AccordionPanelTitleDirective,
        AccordionPanelContentDirective
    ],
    declarations: [
        AccordionComponent,
        AccordionPanelDirective,
        AccordionPanelTitleDirective,
        AccordionPanelContentDirective
    ],
    providers: [AccordionService],
})
export class AccordionModule {
}
