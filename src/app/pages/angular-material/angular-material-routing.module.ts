import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularMaterialComponent } from './angular-material.component';

const routes: Routes = [
  {
    path: '',
    component: AngularMaterialComponent,
    data: {
      title: 'Angular Material'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularMaterialRoutingModule { }
