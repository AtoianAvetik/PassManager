import { Directive, TemplateRef } from '@angular/core';

/**
 * This directive should be used to wrap accordion panel headings that need to contain HTML markup or other directives.
 */
@Directive({
    selector: 'ng-template[accordionPanelHeading]'
})

export class AccordionPanelHeadingDirective {
    constructor(public templateRef: TemplateRef<any>) {}
}
