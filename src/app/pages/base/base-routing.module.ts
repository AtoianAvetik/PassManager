import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';



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
