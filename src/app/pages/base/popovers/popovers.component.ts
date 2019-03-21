import { Component, OnInit } from '@angular/core';
import { NgcPopoverConfig } from '../../../ng-custom';

@Component( {
    selector: 'app-popovers',
    templateUrl: './popovers.component.html',
    styleUrls: ['./popovers.component.scss']
} )
export class PopoversComponent implements OnInit {
    name = 'World';
    lastShown: Date;
    lastHidden: Date;

    constructor(config: NgcPopoverConfig) {
        // customize default values of popovers used by this component tree
        // config.placement = 'right';
        // config.triggers = 'hover';
    }

    ngOnInit() {
    }

    toggleWithGreeting(popover, greeting: string, language: string) {
        if (popover.isOpen()) {
            popover.close();
        } else {
            popover.open({greeting, language});
        }
    }

    recordShown() {
        this.lastShown = new Date();
    }

    recordHidden() {
        this.lastHidden = new Date();
    }
}
