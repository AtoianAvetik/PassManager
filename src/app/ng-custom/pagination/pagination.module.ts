import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
    NgcPagination,
    NgcPaginationEllipsis,
    NgcPaginationFirst,
    NgcPaginationLast,
    NgcPaginationNext,
    NgcPaginationNumber,
    NgcPaginationPrevious
} from './pagination';

export {
    NgcPagination,
    NgcPaginationEllipsis,
    NgcPaginationFirst,
    NgcPaginationLast,
    NgcPaginationNext,
    NgcPaginationNumber,
    NgcPaginationPrevious
} from './pagination';
export {NgcPaginationConfig} from './pagination-config';

const DIRECTIVES = [
    NgcPagination,
    NgcPaginationEllipsis,
    NgcPaginationFirst,
    NgcPaginationLast,
    NgcPaginationNext,
    NgcPaginationNumber,
    NgcPaginationPrevious
];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES,
    imports: [CommonModule]
})
export class NgcPaginationModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcPaginationModule };
    }
}
