import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdvancedCardsComponent } from './advanced/advanced-cards.component';
import { BasicCardsComponent } from './basic/basic-cards.component';
import { MatchHeightModule } from '../../shared/_directives/match-height.directive';

@NgModule({
    imports: [
        CommonModule,
        CardsRoutingModule,
        NgbModule,
        MatchHeightModule
    ],
    declarations: [
        BasicCardsComponent,
        AdvancedCardsComponent
    ]
})
export class CardsModule {
}
