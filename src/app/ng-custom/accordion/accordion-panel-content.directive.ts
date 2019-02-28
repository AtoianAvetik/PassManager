import { Directive, TemplateRef } from '@angular/core';

/**
 * This directive must be used to wrap accordion panel content.
 */
@Directive({
    selector: 'ng-template[accordionPanelContent]'
})

export class NgcAccordionPanelContentDirective {
    constructor(public templateRef: TemplateRef<any>) {}
}
