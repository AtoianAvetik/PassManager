import { Component, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';

@Component({
    selector: 'ngc-modal-backdrop',
    template: '',
    animations: [
        trigger('animation', [
            state('close', style({opacity: 0})),
            transition('void => *', [
                style({opacity: 0}),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({opacity: 0}))
            ]),
            transition('* => close', animate('0.3s'))
        ])
    ]
})
export class NgcModalBackdropComponent implements OnInit {
    @Input() backdropClass: string;
    @Output('backdropClosingDidStart') backdropClosingDidStart = new Subject();
    @Output('backdropClosingDidDone') backdropClosingDidDone = new Subject();
    @Output('backdropOpeningDidStart') backdropOpeningDidStart = new Subject();
    @Output('backdropOpeningDidDone') backdropOpeningDidDone = new Subject();
    @HostBinding('class') class;
    @HostBinding('style.z-index') zIndex = '1050';
    @HostBinding('@animation') animation = 'start';

    @HostListener('@animation.start', ['$event']) onAnimationStart($event) {
        this.animationAction($event);
    }

    @HostListener('@animation.done', ['$event']) onAnimationDone($event) {
        this.animationAction($event);
    }

    ngOnInit(): void {
        this.class = 'modal-backdrop fade show' + (this.backdropClass ? ' ' + this.backdropClass : '');
    }

    animationAction($event) {
        switch ($event.phaseName) {
            case 'start':
                switch ($event.toState) {
                    case 'start':
                        this.backdropOpeningDidStart.next();
                        break;
                    case 'close':
                        this.backdropClosingDidStart.next();
                        break;
                }
                break;
            case 'done':
                switch ($event.toState) {
                    case 'start':
                        this.backdropOpeningDidDone.next();
                        break;
                    case 'close':
                        this.backdropClosingDidDone.next();
                        break;
                }
                break;
        }
    }
}
