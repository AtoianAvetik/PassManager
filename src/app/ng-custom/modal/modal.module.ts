import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcModalService } from './modal.service';
import { NgcModalComponent } from './modal.component';
import { NgcModalBackdropComponent } from './modal-backdrop.component';
import { NgcModalOpenDirective } from './modal-open.directive';
import { NgcModalCloseDirective } from './modal-close.directive';
import { NgcModalDismissDirective } from './modal-dismiss.directive';
import { NgcModalWindowComponent } from './modal-window.component';

export { NgcModalService } from './modal.service';
export { NgcModalComponent } from './modal.component';
export { NgcModalOpenDirective } from './modal-open.directive';
export { NgcModalCloseDirective } from './modal-close.directive';
export { NgcModalDismissDirective } from './modal-dismiss.directive';

const NGC_MODAL_DIRECTIVES = [
    NgcModalOpenDirective,
    NgcModalCloseDirective,
    NgcModalDismissDirective,
    NgcModalWindowComponent,
    NgcModalBackdropComponent,
    NgcModalComponent
];

@NgModule( {
    declarations: [NGC_MODAL_DIRECTIVES],
    exports: [NGC_MODAL_DIRECTIVES],
    imports: [CommonModule],
    providers: [NgcModalService],
    entryComponents: [NgcModalWindowComponent, NgcModalBackdropComponent]
} )
export class NgcModalModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcModalModule };
    }
}
