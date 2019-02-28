import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcPanelService } from './panel.service';
import { NgcPanelComponent } from './panel.component';
import { NgcPanelsComponent } from './panels.component';
import { NgcPanelOpenDirective } from './panel-open.directive';
import { NgcPanelCloseDirective } from './panel-close.directive';

export { NgcPanelService } from './panel.service';
export { NgcPanelComponent } from './panel.component';
export { NgcPanelsComponent } from './panels.component';
export { NgcPanelOpenDirective } from './panel-open.directive';
export { NgcPanelCloseDirective } from './panel-close.directive';
export { NgcPanel } from './panel.model';
export { NGC_PANEL_CONFIG, DEFAULT_NGC_PANEL_CONFIG, NgcPanelConfigInterface } from  './panel.config';

const NGC_PANEL_DIRECTIVES = [
    NgcPanelComponent, NgcPanelsComponent, NgcPanelOpenDirective, NgcPanelCloseDirective
];

@NgModule( {
    declarations: [NGC_PANEL_DIRECTIVES],
    exports: [NGC_PANEL_DIRECTIVES],
    imports: [CommonModule]
} )
export class NgcPanelModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcPanelModule };
    }
}
