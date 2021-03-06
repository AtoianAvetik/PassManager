import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AngularMaterialRoutingModule } from './angular-material-routing.module';

import { AngularMaterialComponent } from './angular-material.component';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule
    ],
    declarations: [
        AngularMaterialComponent
    ]
})
export class AngularMaterialModule {
}
