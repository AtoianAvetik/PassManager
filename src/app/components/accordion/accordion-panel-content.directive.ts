import { Directive, TemplateRef } from '@angular/core';

/**
 * This directive must be used to wrap accordion panel content.
 */
@Directive({
    selector: 'ng-template[accordionPanelContent]'
})

export class AccordionPanelContentDirective {
    constructor(public templateRef: TemplateRef<any>) {}
}
