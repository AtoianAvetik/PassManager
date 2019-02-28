import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcLoaderService } from './loader.service';
import { NgcLoaderComponent } from './loader.component';
import { NgcLoaderDirective } from './loader.directive';

export { NgcLoaderService } from './loader.service';
export { NgcLoaderComponent } from './loader.component';
export { NgcLoaderDirective } from './loader.directive';
export { NgcLoader } from './loader.model';

const NGC_LOADER_DIRECTIVES = [
    NgcLoaderComponent, NgcLoaderDirective
];

@NgModule( {
    declarations: [NGC_LOADER_DIRECTIVES],
    exports: [NGC_LOADER_DIRECTIVES],
    imports: [CommonModule],
    entryComponents: [NgcLoaderComponent]
} )
export class NgcLoaderModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcLoaderModule };
    }
}
