import {Injectable, Injector, ComponentFactoryResolver} from '@angular/core';
import { Subject } from 'rxjs';
import * as _ from 'lodash';

import { NgcModalConfig, NgcModalOptions } from './modal-config';
import { NgcModalStack } from './modal-stack';
import { NgcModalRef } from './modal-ref';
import { NgcModalComponent } from './modal.component';


/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
@Injectable({providedIn: 'root'})
export class NgcModalService {
    private _components: NgcModalComponent[] = [];

    constructor(
        private _moduleCFR: ComponentFactoryResolver,
        private _injector: Injector,
        private _modalStack: NgcModalStack,
        private _config: NgcModalConfig) {}

    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content, then instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     */
    open(content: any, options: NgcModalOptions = {}): NgcModalRef {
        const combinedOptions = Object.assign({}, this._config, options);
        return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
    }

    /**
     * Dismiss all currently displayed modal windows with the supplied reason.
     */
    dismissAll(reason?: any) { this._modalStack.dismissAll(reason); }

    /**
     * Indicates if there are currently any open modal windows in the application.
     */
    hasOpenModals(): boolean { return this._modalStack.hasOpenModals(); }


    add(componentRef: NgcModalComponent) {
        this._components.push(componentRef);
    }

    remove(id: string) {
        const modalToRemove = _.find(this._components, {id: id});
        this._components = _.without(this._components, modalToRemove);
    }

    openById(id: string) {
        const modalToOpen = _.find(this._components, {id: id});
        this.open(modalToOpen, modalToOpen.options);
    }

    closeById(id: string) {
        _.find(this._components, {id: id}).close();
    }

    dismissById(id: string) {
        _.find(this._components, {id: id}).dismiss();
    }
}
