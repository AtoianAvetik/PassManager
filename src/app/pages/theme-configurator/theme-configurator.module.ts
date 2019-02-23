import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeConfiguratorRoutingModule } from './theme-configurator-routing.module';

import { ThemeConfiguratorComponent } from './theme-configurator.component';

@NgModule({
    imports: [
        CommonModule,
        ThemeConfiguratorRoutingModule,
    ],
    declarations: [
        ThemeConfiguratorComponent
    ]
})
export class ThemeConfiguratorModule {
}
