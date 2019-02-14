import { Component } from '@angular/core';
import { IconsService } from './shared/_services/icons.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private $icons: IconsService) {
        this.$icons.registerIcons(this.$icons.customMatIcons);
    }
}
