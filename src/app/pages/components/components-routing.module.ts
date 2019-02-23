import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from '../base/panels/panels.component';
import { LoadersComponent } from '../base/loaders/loaders.component';
import { NotificationsComponent } from '../base/notifications/notifications.component';
import { ModalsComponent } from '../base/modals/modals.component';
import { AccordionsComponent } from '../base/accordions/accordions.component';
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
import { RatingComponent } from './styleguide/rating/rating.component';
import { TabsComponent } from './styleguide/tabs/tabs.component';
import { TooltipComponent } from './styleguide/tooltip/tooltip.component';
import { NgButtonsComponent } from './styleguide/ng-buttons/ng-buttons.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'panels-page',
                component: PanelsComponent,
                data: {
                    title: 'Panels'
                }
            },
            {
                path: 'loaders-page',
                component: LoadersComponent,
                data: {
                    title: 'Loaders'
                }
            },
            {
                path: 'notifications-page',
                component: NotificationsComponent,
                data: {
                    title: 'Notifications'
                }
            },
            {
                path: 'modals-page',
                component: ModalsComponent,
                data: {
                    title: 'Modals'
                }
            },
            {
                path: 'accordion-page',
                component: AccordionsComponent,
                data: {
                    title: 'Accordion'
                }
            },
            {
                path: 'smart-list-page',
                component: SmartListPageComponent,
                data: {
                    title: 'Smart list'
                }
            },
            {
                path: 'smart-folders-page',
                component: SmartFoldersPageComponent,
                data: {
                    title: 'Smart folders'
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
                path: 'lists',
                component: ListsComponent,
                data: {
                    title: 'Lists'
                }
            },
            {
                path: 'badges',
                component: BadgesComponent,
                data: {
                    title: 'Badges'
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
                path: 'inputgroups',
                component: InputGroupsComponent,
                data: {
                    title: 'Input Groups'
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
                path: 'progress',
                component: ProgressBarsComponent,
                data: {
                    title: 'Progress Bars'
                }
            },
            {
                path: 'popover',
                component: PopoverComponent,
                data: {
                    title: 'Popovers'
                }
            },
            {
                path: 'rating',
                component: RatingComponent,
                data: {
                    title: 'Rating'
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
                path: 'tooltip',
                component: TooltipComponent,
                data: {
                    title: 'Tooltips'
                }
            },
            {
                path: 'ng-buttons',
                component: NgButtonsComponent,
                data: {
                    title: 'Ngb-Bootstrap'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsRoutingModule {
}
