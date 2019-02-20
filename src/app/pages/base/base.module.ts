import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseRoutingModule } from './base-routing.module';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
    imports: [
        CommonModule,
        BaseRoutingModule,
        PrismModule,
        NgbModule
    ],
    declarations: [
        AlertComponent,
        BadgeComponent,
        ButtonsComponent,
        BreadcrumbComponent
    ],
    providers: [],
})
export class BaseModule {
}
