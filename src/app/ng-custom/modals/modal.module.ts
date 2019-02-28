import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcModalService } from './modal.service';
import { NgcModalComponent } from './modal.component';
import { NgcModalsComponent } from './modals.component';
import { NgcModalOpenDirective } from './modal-open.directive';
import { NgcModalCloseDirective } from './modal-close.directive';


export { NgcModalService } from './modal.service';
export { NgcModalComponent } from './modal.component';
export { NgcModalsComponent } from './modals.component';
export { NgcModalOpenDirective } from './modal-open.directive';
export { NgcModalCloseDirective } from './modal-close.directive';
export { NgcModal } from './modal.model';

const NGC_MODAL_DIRECTIVES = [
    NgcModalComponent, NgcModalsComponent, NgcModalOpenDirective, NgcModalCloseDirective
];

@NgModule( {
    declarations: [NGC_MODAL_DIRECTIVES],
    exports: [NGC_MODAL_DIRECTIVES],
    imports: [CommonModule]
} )
export class NgcModalModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcModalModule };
    }
}
