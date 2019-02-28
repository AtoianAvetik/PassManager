import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material';
import { BaseRoutingModule } from './base-routing.module';
import { NgcModule } from '../../ng-custom';

import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { BasicCardsComponent } from './cards/basic/basic-cards.component';
import { AdvancedCardsComponent } from './cards/advanced/advanced-cards.component';
import { CollapseComponent } from './collapse/collapse.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalsComponent } from './modals/modals.component';
import { NavsComponent } from './navs/navs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { LoadersComponent } from './loaders/loaders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelsComponent } from './panels/panels.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { TablesComponent } from './tables/tables.component';


@NgModule({
    imports: [
        CommonModule,
        BaseRoutingModule,
        PrismModule,
        NgbModule,
        NgcModule,
        MatTabsModule,
    ],
    declarations: [
        AlertComponent,
        BadgeComponent,
        ButtonsComponent,
        BreadcrumbComponent,
        ButtonGroupComponent,
        BasicCardsComponent,
        AdvancedCardsComponent,
        CollapseComponent,
        AccordionsComponent,
        DropdownsComponent,
        ListGroupComponent,
        ModalsComponent,
        NavsComponent,
        NavbarComponent,
        TabsComponent,
        SpinnersComponent,
        LoadersComponent,
        NotificationsComponent,
        PaginationComponent,
        PanelsComponent,
        PopoversComponent,
        ProgressComponent,
        TooltipsComponent,
        ScrollspyComponent,
        TablesComponent,
    ],
    providers: [],
})
export class BaseModule {
}
