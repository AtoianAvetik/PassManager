import { DOCUMENT } from '@angular/common';
import {
    Component,
    ElementRef,
    HostBinding, HostListener,
    Inject,
    Input, OnInit,
    Output
} from '@angular/core';
import { Subject } from 'rxjs';
import { ModalDismissReasons } from './modal-dismiss-reasons';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'ngc-modal-window',
    template: `
        <div [class]="'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') + (scrollableContent ? ' modal-dialog-scrollable' : '')" role="document">
            <ng-content></ng-content>
        </div>
    `,
    animations: [
        trigger('animation', [
            state('close', style({opacity: 0, transform: 'scale(0, 0)'})),
            transition('void => *', [
                style({opacity: 0, transform: 'scale(0, 0)'}),
                animate('0.3s cubic-bezier(0.680, -0.550, 0.265, 1.550)')
            ]),
            transition('* => close', animate('0.3s cubic-bezier(0.680, -0.550, 0.265, 1.550)'))
        ])
    ]
})
export class NgcModalWindowComponent implements OnInit {

    @Input() backdrop: boolean | string = true;
    @Input() centered: string;
    @Input() keyboard = true;
    @Input() size: string;
    @Input() scrollableContent: string;
    @Input() windowClass: string;
    @Input() dialogClass: string;

    @Output('dismiss') dismissEvent = new Subject();
    @Output('modalClosingDidStart') modalClosingDidStart = new Subject();
    @Output('modalClosingDidDone') modalClosingDidDone = new Subject();
    @Output('modalOpeningDidStart') modalOpeningDidStart = new Subject();
    @Output('modalOpeningDidDone') modalOpeningDidDone = new Subject();

    @HostBinding('@animation') animation = 'open';
    @HostBinding('class') class;
    @HostBinding('tabindex') tabindex = '-1';
    @HostBinding('attr.aria-modal.true') ariaModal = true;

    @HostListener('click', ['$event']) onBackdropClick($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
        }
    }

    @HostListener('document:keyup.esc', ['$event']) onEscKey($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(ModalDismissReasons.ESC);
        }
    }

    @HostListener('@animation.start', ['$event']) onAnimationStart($event) {
        this.animationAction($event);
    }

    @HostListener('@animation.done', ['$event']) onAnimationDone($event) {
        this.animationAction($event);
    }

    constructor(@Inject(DOCUMENT) private _document: any,
                private _elRef: ElementRef<HTMLElement>) {
    }

    ngOnInit(): void {
        this.class = 'modal fade show d-block' + (this.windowClass ? ' ' + this.windowClass : '');
    }

    dismiss(reason): void {
        this.dismissEvent.next(reason);
    }

    animationAction($event) {
        switch ($event.phaseName) {
            case 'start':
                switch ($event.toState) {
                    case 'start':
                        this.modalOpeningDidStart.next();
                        break;
                    case 'close':
                        this.modalClosingDidStart.next();
                        break;
                }
                break;
            case 'done':
                switch ($event.toState) {
                    case 'start':
                        this.modalOpeningDidDone.next();
                        break;
                    case 'close':
                        this.modalClosingDidDone.next();
                        break;
                }
                break;
        }
    }
}
