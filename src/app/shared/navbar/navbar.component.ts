import { Component } from '@angular/core';

import { SidebarService } from '../_services/sidebar.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    isHideSidebar: boolean;
    toggleClass = 'ft-maximize';

    constructor(private _sidebarService: SidebarService,
                private $auth: AuthService) {
        this.isHideSidebar = this._sidebarService.isHideSidebar;
        this._sidebarService.isHideSidebarChange.subscribe(status => this.isHideSidebar = status);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        } else
            this.toggleClass = 'ft-maximize';
    }

    toggleSidebar() {
        event.preventDefault();
        event.stopPropagation();
        this._sidebarService.isHideSidebarChange.next(!this.isHideSidebar);
    }

    onLogout() {
        this.$auth.signOut();
    }
}
