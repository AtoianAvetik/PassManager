import { Component, OnInit } from '@angular/core';

import { NgcModalService } from '../../../ng-custom';

@Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.scss']
})

export class ModalsComponent implements OnInit {
    constructor(private $modalService: NgcModalService) {
    }

    ngOnInit(): void {
    }

    openModal(conent) {
        this.$modalService.open(conent);
    }
}
