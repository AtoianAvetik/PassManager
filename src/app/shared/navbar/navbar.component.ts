import { Component } from '@angular/core';

import { AsideService } from '../_services/aside.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    isHideAside: boolean;
    toggleClass = 'ft-maximize';

    constructor(private _asideService: AsideService,
                private $auth: AuthService) {
        this.isHideAside = this._asideService.isHideAside;
        this._asideService.isHideAsideChange.subscribe(status => this.isHideAside = status);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        } else
            this.toggleClass = 'ft-maximize';
    }

    toggleAside() {
        event.preventDefault();
        event.stopPropagation();
        this._asideService.isHideAsideChange.next(!this.isHideAside);
    }

    onLogout() {
        this.$auth.signOut();
    }
}
