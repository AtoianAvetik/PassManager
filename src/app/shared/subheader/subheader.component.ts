import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-subheader',
    templateUrl: './subheader.component.html',
    styleUrls: ['./subheader.component.scss']
})

export class SubheaderComponent implements OnInit {
    title = '';

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let currentRoute = this.route.root.firstChild;
                while (currentRoute) {
                    this.title = currentRoute.snapshot.data['title'];
                    if (!currentRoute.snapshot.children) {
                        break;
                    }
                    currentRoute = currentRoute.firstChild;
                }
            }
        });
    }

    ngOnInit() {
    }
}
