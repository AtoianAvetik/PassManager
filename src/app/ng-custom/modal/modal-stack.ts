import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgcModalRef } from './modal-ref';
import { ScrollBar } from '../util/scrollbar';
import { isDefined } from '../util/util';
import { NgcModalWindowComponent } from './modal-window.component';
import { NgcModalBackdropComponent } from './modal-backdrop.component';

@Injectable({providedIn: 'root'})
export class NgcModalStack {
    private _modalRefs: NgcModalRef[] = [];
    private _backdropAttributes = ['backdropClass'];
    private _windowAttributes = ['backdrop', 'centered', 'keyboard', 'size', 'scrollableContent', 'windowClass'];

    constructor(
        private _applicationRef: ApplicationRef,
        private _injector: Injector,
        @Inject(DOCUMENT) private _document: any,
        private _scrollBar: ScrollBar,
        private _rendererFactory: RendererFactory2) {

    }

    open(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, options) {
        console.log(options);
        const containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
        const renderer = this._rendererFactory.createRenderer(null, null);

        const revertPaddingForScrollBar = this._scrollBar.compensate();
        const removeBodyClass = () => {
            if (!this._modalRefs.length) {
                renderer.removeClass(this._document.body, 'modal-open');
            }
        };

        if (!containerEl) {
            throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
        }

        const backdropCmptRef: ComponentRef<NgcModalBackdropComponent> =
            options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
        const windowCmptRef: ComponentRef<NgcModalWindowComponent> = this._attachWindowComponent(moduleCFR, containerEl, content._elRef.nativeElement);
        const ngcModalRef: NgcModalRef = new NgcModalRef(windowCmptRef, backdropCmptRef, options.beforeDismiss);

        this._registerModalRef(ngcModalRef);
        ngcModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
        ngcModalRef.result.then(removeBodyClass, removeBodyClass);
        content.close = (result: any) => { ngcModalRef.close(result); };
        content.dismiss = (reason: any) => { ngcModalRef.dismiss(reason); };

        this._applyWindowOptions(windowCmptRef.instance, options);
        if (this._modalRefs.length === 1) {
            renderer.addClass(this._document.body, 'modal-open');
        }

        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
        }
        return ngcModalRef;
    }

    dismissAll(reason?: any) { this._modalRefs.forEach(ngcModalRef => ngcModalRef.dismiss(reason)); }

    hasOpenModals(): boolean { return this._modalRefs.length > 0; }

    private _attachBackdrop(moduleCFR: ComponentFactoryResolver, containerEl: any): ComponentRef<NgcModalBackdropComponent> {
        const backdropFactory = moduleCFR.resolveComponentFactory(NgcModalBackdropComponent);
        const backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    }

    private _attachWindowComponent(moduleCFR: ComponentFactoryResolver, containerEl: any, content: any):
        ComponentRef<NgcModalWindowComponent> {
        const windowFactory = moduleCFR.resolveComponentFactory(NgcModalWindowComponent);
        const windowCmptRef = windowFactory.create(this._injector, [[content]]);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    }

    private _applyWindowOptions(windowInstance: NgcModalWindowComponent, options: Object): void {
        this._windowAttributes.forEach((optionName: string) => {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    }

    private _applyBackdropOptions(backdropInstance: NgcModalBackdropComponent, options: Object): void {
        this._backdropAttributes.forEach((optionName: string) => {
            if (isDefined(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        });
    }

    private _registerModalRef(ngcModalRef: NgcModalRef) {
        const unregisterModalRef = () => {
            const index = this._modalRefs.indexOf(ngcModalRef);
            if (index > -1) {
                this._modalRefs.splice(index, 1);
            }
        };
        this._modalRefs.push(ngcModalRef);
        ngcModalRef.result.then(unregisterModalRef, unregisterModalRef);
    }
}
