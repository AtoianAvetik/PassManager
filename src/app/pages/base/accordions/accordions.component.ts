import { Component } from '@angular/core';

@Component({
	selector: 'app-accordions',
	templateUrl: './accordions.component.html',
	styleUrls: ['./accordions.component.scss']
})

export class AccordionsComponent {
    flag = false;
    hooks = {
        'before-sanity-check': (env) => { console.log(`before-sanity-check`, env); },
        'before-highlight': (env) => { console.log(`before-highlight`, env); },
        'after-highlight': (env) => { console.log(`after-highlight`, env); },
        'complete': (env) => { console.log(`complete`, env); return env;},
        'before-insert': (env) => { console.log(`before-insert`, env); }
    };
}
