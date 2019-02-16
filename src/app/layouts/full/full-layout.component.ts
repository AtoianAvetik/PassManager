import { Component, OnInit, ElementRef } from '@angular/core';

import { AsideService } from '../../shared/_services/aside.service';
import { PanelService } from '../../components/panels/panel.service';
import { NotificationService } from '../../components/notifications/notification.service';
import { ModalService } from '../../components/modals/modal.service';

const fireRefreshEventOnWindow = function () {
    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss'],
    providers: [PanelService, NotificationService, ModalService]
})

export class FullLayoutComponent implements OnInit {
    isNavExpand: boolean;
    isMenuExpand: boolean;
    isHideAside: boolean;

    constructor(private elementRef: ElementRef,
                private _asideService: AsideService) {
        this.isNavExpand = this._asideService.isNavExpand;
        this.isMenuExpand = this._asideService.isMenuExpand;
        this.isHideAside = this._asideService.isHideAside;
        this._asideService.isNavExpandChange.subscribe(status => this.isNavExpand = status);
        this._asideService.isMenuExpandChange.subscribe(status => this.isMenuExpand = status);
        this._asideService.isHideAsideChange.subscribe(status => this.isHideAside = status);
    }

    ngOnInit() {
        // aside toggle event listner
        this.elementRef.nativeElement.querySelector('#asideToggle')
            .addEventListener('click', this.onClick.bind(this));
        // customizer events
        // this.elementRef.nativeElement.querySelector('#cz-compact-menu')
        //     .addEventListener('click', this.onClick.bind(this));
        // this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
        //     .addEventListener('click', this.onClick.bind(this));
    }

    onClick(event) {
        // initialize window resizer event on aside toggle click event
        setTimeout(() => {
            fireRefreshEventOnWindow();
        }, 300);
    }
}
