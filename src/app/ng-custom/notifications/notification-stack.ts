import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    Inject, Injectable, Injector, RendererFactory2
} from '@angular/core';

import { NgcNotification } from './notification.model';
import { NgcNotificationComponent } from './notification.component';
import { DOCUMENT } from '@angular/common';
import { isDefined } from '../util/util';

@Injectable({providedIn: 'root'})
export class NgcNotificationStack {
    containerEl = this._document.body;
    private _notificationRefs: NgcNotificationComponent[] = [];
    private _notificationAttributes = ['type', 'message', 'timeout', 'typeClass', 'aside', 'title', '_ref'];

    constructor( private _injector: Injector,
                 private _appRef: ApplicationRef,
                 private _rendererFactory: RendererFactory2,
                 @Inject(DOCUMENT) private _document: any) {
        this.initContainer();
    }

    initContainer() {
        const renderer = this._rendererFactory.createRenderer(null, null);
        const containerEl = renderer.createElement('div');
        const wrapperEl = renderer.createElement('div');
        renderer.addClass(containerEl, 'notification-overlay-container');
        renderer.addClass(wrapperEl, 'notification-wrapper');
        renderer.appendChild(containerEl, wrapperEl);
        renderer.appendChild(this._document.body, containerEl);
        this.containerEl = wrapperEl;
    }

    show( moduleCFR: ComponentFactoryResolver, options: NgcNotification) {
        const notificationCmptRef: ComponentRef<NgcNotificationComponent> = this._attachNotificationComponent(moduleCFR, this.containerEl);
        this._registerNotificationRef(notificationCmptRef.instance);
        this._applyNotificationOptions(notificationCmptRef.instance, <NgcNotification>Object.assign({}, { _ref: notificationCmptRef }, options));
    }

    clearAll() {
        this._notificationRefs.forEach(ngcNotificationRef => ngcNotificationRef.closeNotification());
    }

    private _attachNotificationComponent(moduleCFR: ComponentFactoryResolver, containerEl: any):
        ComponentRef<NgcNotificationComponent> {
        const notificationFactory = moduleCFR.resolveComponentFactory(NgcNotificationComponent);
        const notificationCmptRef = notificationFactory.create(this._injector);
        // Attach component to the appRef so that it's inside the ng component tree
        this._appRef.attachView(notificationCmptRef.hostView);
        // Append DOM element to the body
        containerEl.appendChild(notificationCmptRef.location.nativeElement);
        return notificationCmptRef;
    }

    private _applyNotificationOptions(notificationInstance: NgcNotification, options: Object): void {
        this._notificationAttributes.forEach((optionName: string) => {
            if (isDefined(options[optionName])) {
                notificationInstance[optionName] = options[optionName];
            }
        });
    }

    private _registerNotificationRef(ngcNotificationComponent: NgcNotificationComponent) {
        const _unregisterNotificationRef = () => {
            const index = this._notificationRefs.indexOf(ngcNotificationComponent);
            if (index > -1) {
                this._notificationRefs.splice(index, 1);
            }
        };
        this._notificationRefs.push(ngcNotificationComponent);
        ngcNotificationComponent.result.then(_unregisterNotificationRef, _unregisterNotificationRef);
    }
}
