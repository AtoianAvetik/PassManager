import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { SmartListModule } from '../../components/smart-list/smart-list.module';
import { SmartFoldersModule } from '../../components/smart-folders/smart-folders.module';
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
        NgbModule,
        PrismModule,
        SmartListModule,
        SmartFoldersModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
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
