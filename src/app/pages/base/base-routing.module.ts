import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'alert',
                component: AlertComponent,
                data: {
                    title: 'Alert'
                }
            },
            {
                path: 'badge',
                component: BadgeComponent,
                data: {
                    title: 'Badge'
                }
            },
            {
                path: 'breadcrumb',
                component: BreadcrumbComponent,
                data: {
                    title: 'Breadcrumb'
                }
            },
            {
                path: 'buttons',
                component: ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'button-group',
                component: ButtonGroupComponent,
                data: {
                    title: 'Button Group'
                }
            },
            {
                path: 'cards/basic',
                component: BasicCardsComponent,
                data: {
                    title: 'Basic Cards'
                }
            },
            {
                path: 'cards/advanced',
                component: AdvancedCardsComponent,
                data: {
                    title: 'Advanced Cards'
                }
            },
            {
                path: 'collapse',
                component: CollapseComponent,
                data: {
                    title: 'Collapse'
                }
            },
            {
                path: 'accordions',
                component: AccordionsComponent,
                data: {
                    title: 'Accordions'
                }
            },
            {
                path: 'dropdowns',
                component: DropdownsComponent,
                data: {
                    title: 'Dropdowns'
                }
            },
            {
                path: 'list-group',
                component: ListGroupComponent,
                data: {
                    title: 'List group'
                }
            },
            {
                path: 'modals',
                component: ModalsComponent,
                data: {
                    title: 'Modals'
                }
            },
            {
                path: 'navs',
                component: NavsComponent,
                data: {
                    title: 'Navs'
                }
            },
            {
                path: 'navbar',
                component: NavbarComponent,
                data: {
                    title: 'Navbar'
                }
            },
            {
                path: 'tabs',
                component: TabsComponent,
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'spinners',
                component: SpinnersComponent,
                data: {
                    title: 'Spinners'
                }
            },
            {
                path: 'loaders',
                component: LoadersComponent,
                data: {
                    title: 'Loaders'
                }
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
                data: {
                    title: 'Notifications'
                }
            },
            {
                path: 'pagination',
                component: PaginationComponent,
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'panels',
                component: PanelsComponent,
                data: {
                    title: 'Panels'
                }
            },
            {
                path: 'popovers',
                component: PopoversComponent,
                data: {
                    title: 'Popovers'
                }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'tooltips',
                component: TooltipsComponent,
                data: {
                    title: 'Tooltips'
                }
            },
            {
                path: 'scrollspy',
                component: ScrollspyComponent,
                data: {
                    title: 'Scrollspy'
                }
            },
            {
                path: 'tables',
                component: TablesComponent,
                data: {
                    title: 'Tables'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BaseRoutingModule {
}
