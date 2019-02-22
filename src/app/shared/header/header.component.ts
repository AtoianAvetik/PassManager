import { Component } from '@angular/core';

import { AsideService } from '../_services/aside.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    isHideAside: boolean;

    constructor(private _asideService: AsideService,
                private $auth: AuthService) {
        this.isHideAside = this._asideService.isHideAside;
        this._asideService.isHideAsideChange.subscribe(status => this.isHideAside = status);
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
