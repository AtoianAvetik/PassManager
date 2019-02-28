import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgcModule } from '../ng-custom';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationItemComponent } from './aside/navigation-item/navigation-item.component';


@NgModule({
    exports: [
        CommonModule,
        HeaderComponent,
        SubheaderComponent,
        FooterComponent,
        AsideComponent,
        NgbModule,
        NgcModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        NgcModule,
        PerfectScrollbarModule,
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
