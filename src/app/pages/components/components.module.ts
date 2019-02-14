import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from '../../components/panels/panel.module';
import { LoaderModule } from '../../components/loader/loader.module';
import { NotificationModule } from '../../components/notifications/notification.module';
import { PrismModule } from '@ngx-prism/core';
import { ModalModule } from '../../components/modals/modal.module';
import { SmartListModule } from '../../components/smart-list/smart-list.module';
import { SmartFoldersModule } from '../../components/smart-folders/smart-folders.module';
import { AccordionModule } from '../../components/accordion/accordion.module';
import { PanelsPageComponent } from './extra/panels-page/panels-page.component';
import { LoadersPageComponent } from './extra/loaders-page/loaders-page.component';
import { AccordionPageComponent } from './extra/accordion-page/accordion-page.component';
import { ModalsPageComponent } from './extra/modals-page/modals-page.component';
import { NotificationsPageComponent } from './extra/notifications-page/notifications-page.component';
import { SmartListPageComponent } from './extra/smart-list-page/smart-list-page.component';
import { SmartFoldersPageComponent } from './extra/smart-folders-page/smart-folders-page.component';
import { ButtonsComponent } from './styleguide/buttons/buttons.component';
import { ListsComponent } from './styleguide/lists/lists.component';
import { BadgesComponent } from './styleguide/badges/badges.component';
import { DropdownsComponent } from './styleguide/dropdowns/dropdowns.component';
import { InputGroupsComponent } from './styleguide/input-groups/input-groups.component';
import { PaginationComponent } from './styleguide/pagination/pagination.component';
import { ProgressBarsComponent } from './styleguide/progress/progress.component';
import { PopoverComponent } from './styleguide/popover/popover.component';
import { TabsComponent } from './styleguide/tabs/tabs.component';
import { RatingComponent } from './styleguide/rating/rating.component';
import { TooltipComponent } from './styleguide/tooltip/tooltip.component';
import { NgButtonsComponent } from './styleguide/ng-buttons/ng-buttons.component';


@NgModule({
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        PanelModule,
        LoaderModule,
        NgbModule,
        NotificationModule,
        ModalModule,
        PrismModule,
        AccordionModule,
        SmartListModule,
        SmartFoldersModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        PanelsPageComponent,
        LoadersPageComponent,
        NotificationsPageComponent,
        ModalsPageComponent,
        AccordionPageComponent,
        SmartListPageComponent,
        SmartFoldersPageComponent,
        ButtonsComponent,
        ListsComponent,
        BadgesComponent,
        DropdownsComponent,
        InputGroupsComponent,
        PaginationComponent,
        ProgressBarsComponent,
        PopoverComponent,
        RatingComponent,
        TabsComponent,
        TooltipComponent,
        NgButtonsComponent,
    ],
    providers: [],
})
export class ComponentsModule {
}
