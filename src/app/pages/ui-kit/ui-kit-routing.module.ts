import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsComponent } from './grids/grids.component';
import { TypographyComponent } from './typography/typography.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { TextUtilitiesComponent } from './text-utilities/text-utilities.component';
import { FeatherComponent } from './icons/feather/feather.component';
import { FontAwesomeComponent } from './icons/font-awesome/font-awesome.component';
import { LineAwesomeComponent } from './icons/line-awesome/line-awesome.component';
import { WeatherIconsComponent } from './icons/weather-icons/weather-icons.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'grids',
                component: GridsComponent,
                data: {
                    title: 'Grids'
                }
            },
            {
                path: 'typography',
                component: TypographyComponent,
                data: {
                    title: 'Typography'
                }
            },
            {
                path: 'textutilities',
                component: TextUtilitiesComponent,
                data: {
                    title: 'Text Utilities'
                }
            },
            {
                path: 'helperclasses',
                component: HelperClassesComponent,
                data: {
                    title: 'Helper Classes'
                }
            },
            {
                path: 'feather',
                component: FeatherComponent,
                data: {
                    title: 'Feather Icons'
                }
            },
            {
                path: 'font-awesome',
                component: FontAwesomeComponent,
                data: {
                    title: 'Font Awesome'
                }
            },
            {
                path: 'line-awesome',
                component: LineAwesomeComponent,
                data: {
                    title: 'Line Awesome'
                }
            },
            {
                path: 'weather-icons',
                component: WeatherIconsComponent,
                data: {
                    title: 'Weather Icons'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UIKitRoutingModule {
}
