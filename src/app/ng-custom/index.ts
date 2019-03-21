import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgcAccordionModule } from './accordion/accordion.module';
import { NgcAlertModule } from './alert/alert.module';
import { NgcCollapseModule } from './collapse/collapse.module';
import { NgcDropdownModule } from './dropdown/dropdown.module';
import { NgcModalModule } from './modal/modal.module';
import { NgcLoaderModule } from './loader/loader.module';
import { NgcNotificationModule } from './notifications/notification.module';
import { NgcPaginationModule } from './pagination/pagination.module';
import { NgcPanelModule } from './panels/panel.module';

export {
    NgcAccordionModule,
    NgcAccordionConfig,
    NgcAccordionComponent,
    NgcAccordionPanelDirective,
    NgcAccordionPanelTitleDirective,
    NgcAccordionPanelContentDirective,
} from './accordion/accordion.module';

export {
    NgcAlertModule,
    NgcAlert,
    NgcAlertConfig
} from './alert/alert.module';

export {
    NgcCollapseModule,
    NgcCollapseService,
    NgcCollapseDirective,
    NgcCollapseTriggerDirective
} from './collapse/collapse.module';

export {
    NgcDropdownModule,
    NgcDropdownConfig,
    NgcDropdownDirective,
    NgcDropdownMenuDirective,
    NgcDropdownItemDirective,
    NgcDropdownAnchorDirective,
    NgcDropdownToggleDirective
} from './dropdown/dropdown.module';

export {
    NgcLoaderModule,
    NgcLoader,
    NgcLoaderService,
    NgcLoaderComponent,
    NgcLoaderDirective
} from './loader/loader.module';

export {
    NgcModalModule,
    NgcModalService,
    NgcModalComponent,
    NgcModalOpenDirective,
    NgcModalCloseDirective
} from './modal/modal.module';

export {
    NgcNotificationModule,
    NgcNotification,
    NgcNotificationService,
    NgcNotificationStack,
    NgcNotificationComponent,
} from './notifications/notification.module';

export {
    NgcPaginationModule,
    NgcPagination,
    NgcPaginationFirst,
    NgcPaginationLast,
    NgcPaginationPrevious,
    NgcPaginationNext,
    NgcPaginationEllipsis,
    NgcPaginationNumber,
    NgcPaginationConfig,
} from './pagination/pagination.module';

export {
    NgcPanelModule,
    NgcPanel,
    NgcPanelService,
    NgcPanelComponent,
    NgcPanelsComponent,
    NgcPanelOpenDirective,
    NgcPanelCloseDirective,
    NGC_PANEL_CONFIG, DEFAULT_NGC_PANEL_CONFIG, NgcPanelConfigInterface
} from './panels/panel.module';

const NGC_MODULES = [
    NgcAccordionModule, NgcAlertModule, NgcCollapseModule, NgcDropdownModule, NgcLoaderModule, NgcModalModule, NgcNotificationModule,
    NgcPanelModule, NgcPaginationModule
];

@NgModule( {
    imports: NGC_MODULES,
    exports: NGC_MODULES
} )
export class NgcModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: NgcModule };
    }
}
