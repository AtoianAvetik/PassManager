import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';


@NgModule({
    imports: [
        CommonModule,
        BootstrapRoutingModule,
        NgbModule,
    ],
    declarations: [
        AlertComponent
    ],
    providers: [],
})
export class BootstrapModule {
}
