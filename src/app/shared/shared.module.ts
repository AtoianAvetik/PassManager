import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NotificationModule } from '../components/notifications/notification.module';
import { PanelModule } from '../components/panels/panel.module';

import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationItemComponent } from './aside/navigation-item/navigation-item.component';
import { ModalModule } from '../components/modals/modal.module';

@NgModule({
    exports: [
        CommonModule,
        HeaderComponent,
        SubheaderComponent,
        FooterComponent,
        AsideComponent,
        NgbModule,
        NotificationModule,
        PanelModule,
        ModalModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        NotificationModule,
        PerfectScrollbarModule,
        PanelModule,
        ModalModule
    ],
    declarations: [
        HeaderComponent,
        SubheaderComponent,
        FooterComponent,
        AsideComponent,
        NavigationItemComponent
    ]
})
export class SharedModule {
}
