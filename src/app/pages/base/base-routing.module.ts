import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



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
                path: 'buttons',
                component: ButtonsComponent,
                data: {
                    title: 'Buttons'
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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BaseRoutingModule {
}
