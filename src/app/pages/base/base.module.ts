import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BaseRoutingModule } from './base-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';


@NgModule({
    imports: [
        CommonModule,
        BaseRoutingModule,
        NgbModule,
    ],
    declarations: [
        AlertComponent
    ],
    providers: [],
})
export class BaseModule {
}
