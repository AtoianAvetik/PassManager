import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

import { NgcLoaderService } from './loader.service';

@Component({
    selector: 'ngc-loader-component',
    template: `
        <div
            class="loader"
            [ngClass]="{'-single': !content}"
            [@loading]='isPresent ? "open" : "close"'
            (@loading.done)="animationDone($event)">
            <div class="loader_overlay"></div>
            <div class="loader_wrapper">
                <div class="loader_spinner-wrap">
                    <div class="loader_spinner spinner-v1">
                        <div class="sk-circle1 sk-child"></div>
                        <div class="sk-circle2 sk-child"></div>
                        <div class="sk-circle3 sk-child"></div>
                        <div class="sk-circle4 sk-child"></div>
                        <div class="sk-circle5 sk-child"></div>
                        <div class="sk-circle6 sk-child"></div>
                        <div class="sk-circle7 sk-child"></div>
                        <div class="sk-circle8 sk-child"></div>
                        <div class="sk-circle9 sk-child"></div>
                        <div class="sk-circle10 sk-child"></div>
                        <div class="sk-circle11 sk-child"></div>
                        <div class="sk-circle12 sk-child"></div>
                    </div>
                </div>
                <p *ngIf="content">{{ content }}</p>
            </div>
        </div>

    `,
    animations: [
        trigger('loading', [
            state('open', style({opacity: 1, visibility: 'visible'})),
            state('close', style({opacity: 0, visibility: 'hidden'})),
            transition('close => open', animate('0.3s linear')),
            transition('open => close', animate('0.2s linear'))
        ])
    ]
})

export class NgcLoaderComponent implements OnInit, OnDestroy {
    @Input() id: string;
    content: string = null;
    private _isPresent = false;

    @Input()
    set isPresent(value: boolean) {
        this._isPresent = value;
    }

    get isPresent() {
        return this._isPresent;
    }

    constructor(private _loaderService: NgcLoaderService, private _cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        // ensure id attribute exists
        if (!this.id) {
            console.error('loader must have an id');
            return;
        }

        // add self (this loader instance) to the loader service so it's accessible from controllers
        this._loaderService.add(this);
    }

    // remove self from loader service when directive is destroyed
    ngOnDestroy(): void {
        this._loaderService.remove(this.id);
    }

    // open loader
    present(): Observable<boolean> | Promise<boolean> {
        this.isPresent = true;
        this._cdr.detectChanges();
        return this._loaderService.isloaderOpened;
    }

    // close loader
    dismiss(): Observable<boolean> | Promise<boolean> {
        this.isPresent = false;
        this._cdr.detectChanges();
        return this._loaderService.isloaderClosed;
    }

    animationDone(event) {
        if (event.toState === 'close') {
            this._loaderService.isloaderClosed.next();
        }
        if (event.toState === 'open') {
            this._loaderService.isloaderOpened.next();
        }
    }
}
