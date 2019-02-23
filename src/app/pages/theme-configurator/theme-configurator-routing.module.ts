import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeConfiguratorComponent } from './theme-configurator.component';

const routes: Routes = [
    {
        path: '',
        component: ThemeConfiguratorComponent,
        data: {
            title: 'Theme Configurator'
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeConfiguratorRoutingModule {
}
