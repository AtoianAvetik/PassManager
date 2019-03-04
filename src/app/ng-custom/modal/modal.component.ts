import { Component, Input, OnInit, OnDestroy, ElementRef, HostBinding } from '@angular/core';

import { NgcModalService } from './modal.service';
import { NgcModalOptions } from './modal-config';
import { isDefined } from '../util/util';

@Component({
    moduleId: module.id.toString(),
    selector: 'ngc-modal',
    template: `
        <ng-content></ng-content>
    `
})

export class NgcModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() backdrop: boolean | 'static';
    @Input() beforeDismiss: () => boolean | Promise<boolean>;
    @Input() centered: boolean;
    @Input() container: string;
    @Input() keyboard: boolean;
    @Input() size: 'sm' | 'lg';
    @Input() scrollableContent: boolean;
    @Input() windowClass: string;
    @Input() backdropClass: string;
    options: NgcModalOptions = {};
    @HostBinding('class') class = 'modal-content';

    constructor(private _modalService: NgcModalService,
                private _elRef: ElementRef) {
    }

    ngOnInit(): void {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // set options
        if ( isDefined(this.backdrop) ) { this.options.backdrop = this.backdrop; }
        if ( isDefined(this.beforeDismiss) ) { this.options.beforeDismiss = this.beforeDismiss; }
        if ( isDefined(this.centered) ) { this.options.centered = this.centered; }
        if ( isDefined(this.container) ) { this.options.container = this.container; }
        if ( isDefined(this.keyboard) ) { this.options.keyboard = this.keyboard; }
        if ( isDefined(this.size) ) { this.options.size = this.size; }
        if ( isDefined(this.scrollableContent) ) { this.options.scrollableContent = this.scrollableContent; }
        if ( isDefined(this.windowClass) ) { this.options.windowClass = this.windowClass; }
        if ( isDefined(this.backdropClass) ) { this.options.backdropClass = this.backdropClass; }

        this._modalService.add(this);
    }

    ngOnDestroy(): void {
        this._modalService.remove(this.id);
    }

    /**
     * Closes the modal with an optional 'result' value.
     * The 'NgcMobalRef.result' promise will be resolved with provided value.
     */
    close(result?: any): void {}

    /**
     * Dismisses the modal with an optional 'reason' value.
     * The 'NgcModalRef.result' promise will be rejected with provided value.
     */
    dismiss(reason?: any): void {}
}
