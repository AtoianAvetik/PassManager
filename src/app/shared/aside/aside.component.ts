import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ROUTES } from './aside-routes.config';
import { AsideService } from '../_services/aside.service';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    animations: [
        trigger('slide', [
            state('down', style({height: '*', display: 'block'})),
            state('up', style({height: 0, display: 'none'})),
            transition('up => down', animate('300ms')),
            transition('down => up', animate('300ms'))
        ])
    ]
})

export class AsideComponent implements OnInit {
    @HostListener('mouseenter') onMouseenter() {
        this.onHoverAside(true);
    }

    @HostListener('mouseleave') onMouseleave() {
        this.onHoverAside(false);
    }

    @HostListener('window:resize', ['$event']) onResize(event) {
        this.onHideAside();
    }

    @HostListener('document:click', ['$event']) onClick(event) {
        this.onClickOutside(event);
    }

    public routes: any[];
    public isNavExpand: boolean;

    constructor(private _asideService: AsideService) {
        this.isNavExpand = this._asideService.isNavExpand;
        this._asideService.isNavExpandChange.subscribe(status => this.isNavExpand = status);
    }

    ngOnInit() {
        this.routes = ROUTES.filter(section => section);
        this.onHideAside();
    }

    onHoverAside(value) {
        this._asideService.hoverAside(value);
    }

    onToggleAside(value) {
        event.preventDefault();
        event.stopPropagation();
        this._asideService.toggleAside(value);
    }

    onHideAside() {
        this._asideService.hideAside();
    }

    onClickOutside(e) {
        if (!e.target.closest('app-aside')) {
            this._asideService.hideAside();
        }
    }
}
