import { Component, OnInit } from '@angular/core';
import { NgcPaginationConfig } from '../../../ng-custom';

@Component( {
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
} )
export class PaginationComponent implements OnInit {
    page1 = 3;
    page2 = 3;
    page3 = 3;
    page4 = 3;
    page5 = 3;
    page6 = 3;
    page7 = 3;
    isDisabled = true;

    constructor(config: NgcPaginationConfig) {
        // customize default values of paginations used by this component tree
        // config.size = 'sm';
        config.boundaryLinks = true;
    }

    ngOnInit() {
    }

    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }

}
