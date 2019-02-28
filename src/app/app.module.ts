import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './shared/material.module';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NGC_PANEL_CONFIG, NgcModule, NgcPanelConfigInterface } from './ng-custom';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
/* Services */
import { DataService } from './shared/_services/data.service';
import { ApiService } from './shared/_services/api.service';

import { AsideService } from './shared/_services/aside.service';
import { WindowRef } from './shared/_services/window-ref';
import { UniqueID } from './shared/_services/unique-id.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthModule } from './shared/auth.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

const CUSTOM_NGC_PANEL_CONFIG: NgcPanelConfigInterface = {
    leftPanelExpandedShift: 250,
    leftPanelCollapsedShift: 60
};

@NgModule( {
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgcModule,
        SharedModule,
        CustomMaterialModule,
        HttpClientModule,
        AppRoutingModule,
        AuthModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule
    ],
    providers: [
        ApiService,
        DataService,
        AuthGuard,
        AsideService,
        UniqueID,
        WindowRef,
        {
            provide: NGC_PANEL_CONFIG,
            useValue: CUSTOM_NGC_PANEL_CONFIG
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    bootstrap: [AppComponent]
} )
export class AppModule {
}
