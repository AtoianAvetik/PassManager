import { ComponentRef } from '@angular/core';
import { NgcModalWindowComponent } from './modal-window.component';
import { NgcModalBackdropComponent } from './modal-backdrop.component';

export class NgcModalRef {
    private _resolve: (result?: any) => void;
    private _reject: (reason?: any) => void;

    /**
     * A promise that is resolved when the modal is closed and rejected when the modal is dismissed.
     */
    result: Promise<any>;

    constructor(
        private _windowCmptRef: ComponentRef<NgcModalWindowComponent>,
        private _backdropCmptRef?: ComponentRef<NgcModalBackdropComponent>,
        private _beforeDismiss?: Function) {
        _windowCmptRef.instance.dismissEvent.subscribe((reason: any) => { this.dismiss(reason); });

        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.result.then(null, () => {});
    }

    /**
     * Closes the modal with an optional 'result' value.
     * The 'NgcMobalRef.result' promise will be resolved with provided value.
     */
    close(result?: any): void {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    }

    private _dismiss(reason?: any) {
        this._reject(reason);
        this._removeModalElements();
    }

    /**
     * Dismisses the modal with an optional 'reason' value.
     * The 'NgcModalRef.result' promise will be rejected with provided value.
     */
    dismiss(reason?: any): void {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
                this._dismiss(reason);
            } else {
                const dismiss = this._beforeDismiss();
                if (dismiss && dismiss.then) {
                    dismiss.then(
                        result => {
                            if (result !== false) {
                                this._dismiss(reason);
                            }
                        },
                        () => {});
                } else if (dismiss !== false) {
                    this._dismiss(reason);
                }
            }
        }
    }

    private _removeModalElements() {
        this._windowCmptRef.instance.modalClosingDidDone.subscribe(() => {
            const windowNativeEl = this._windowCmptRef.location.nativeElement;
            windowNativeEl.parentNode.removeChild(windowNativeEl);
            this._windowCmptRef.destroy();
            this._windowCmptRef = null;
        });
        this._windowCmptRef.instance.animation = 'close';

        if (this._backdropCmptRef) {
            this._backdropCmptRef.instance.backdropClosingDidDone.subscribe(() => {
                const backdropNativeEl = this._backdropCmptRef.location.nativeElement;
                backdropNativeEl.parentNode.removeChild(backdropNativeEl);
                this._backdropCmptRef.destroy();
                this._backdropCmptRef = null;
            });
            this._backdropCmptRef.instance.animation = 'close';
        }
    }
}
