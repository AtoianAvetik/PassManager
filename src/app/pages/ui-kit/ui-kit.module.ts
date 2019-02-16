import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIKitRoutingModule } from './ui-kit-routing.module';

import { GridsComponent } from './grids/grids.component';
import { TypographyComponent } from './typography/typography.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { TextUtilitiesComponent } from './text-utilities/text-utilities.component';
import { FeatherComponent } from './icons/feather/feather.component';
import { FontAwesomeComponent } from './icons/font-awesome/font-awesome.component';
import { SimpleLineComponent } from './icons/simple-line/simple-line.component';
import { MatchHeightModule } from '../../shared/_directives/match-height.directive';

;

@NgModule({
    imports: [
        CommonModule,
        UIKitRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatchHeightModule
    ],
    declarations: [
        GridsComponent,
        TypographyComponent,
        HelperClassesComponent,
        TextUtilitiesComponent,
        FeatherComponent,
        FontAwesomeComponent,
        SimpleLineComponent
    ]
})
export class UIKitModule {
}
