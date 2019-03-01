import {
    ChangeDetectorRef,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter, HostBinding, HostListener,
    Inject,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject, Subscription } from 'rxjs';

import { Placement, PlacementArray } from '../util/positioning';
import { ngcAutoClose } from '../util/autoclose';
import { Key } from '../util/key';

import { NgcDropdownConfig } from './dropdown-config';
import { NgcDropdownMenuDirective } from './dropdown-menu.directive';
import { NgcDropdownAnchorDirective } from './dropdown-anchor.directive';
import { NgcDropdownService } from './dropdown.service';


/**
 * Transforms a node into a dropdown.
 */
@Directive( {
    selector: '[ngcDropdown]',
    exportAs: 'ngcDropdown',
    providers: [NgcDropdownService]
} )
export class NgcDropdownDirective implements OnInit, OnDestroy {
    private _closed$ = new Subject<void>();
    private _zoneSubscription: Subscription;
    private _onToggleChangeSubscription: Subscription;
    private _isOpenSubscription: Subscription;

    @ContentChild( NgcDropdownMenuDirective ) private _menu: NgcDropdownMenuDirective;

    @ContentChild( NgcDropdownMenuDirective, { read: ElementRef } ) private _menuElementRef: ElementRef<HTMLElement>;

    @ContentChild( NgcDropdownAnchorDirective ) private _anchor: NgcDropdownAnchorDirective;

    /**
     * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
     * When it is true (default) dropdowns are automatically closed on both outside and inside (menu) clicks.
     * When it is false dropdowns are never automatically closed.
     * When it is 'outside' dropdowns are automatically closed on outside clicks but not on menu clicks.
     * When it is 'inside' dropdowns are automatically on menu clicks but not on outside clicks.
     */
    @Input() autoClose: boolean | 'outside' | 'inside';

    /**
     *  Defines whether or not the dropdown-menu is open initially.
     */
    @Input( 'open' ) _open = false;

    /**
     * Placement of a popover accepts:
     *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
     *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
     *  array or a space separated string of above values
     */
    @Input() placement: PlacementArray;

    /**
     *  An event fired when the dropdown is opened or closed.
     *  Event's payload equals whether dropdown is open.
     */
    @Output() openChange = new EventEmitter<boolean>();

    @HostBinding('class.show') show = this.isOpen();
    @HostListener('document:keydown.ArrowUp', ['$event']) onArrowUp($event) { this.onKeyDown($event); }
    @HostListener('document:keydown.ArrowDown', ['$event']) onArrowArrowDown($event) { this.onKeyDown($event); }
    @HostListener('document:keydown.Home', ['$event']) onArrowHome($event) { this.onKeyDown($event); }
    @HostListener('document:keydown.End', ['$event']) onArrowEnd($event) { this.onKeyDown($event); }

    constructor(
        private _changeDetector: ChangeDetectorRef, config: NgcDropdownConfig, @Inject( DOCUMENT ) private _document: any,
        private _ngZone: NgZone, private _elementRef: ElementRef<HTMLElement>,
        private $dropdownService: NgcDropdownService) {
        this.placement = config.placement;
        this.autoClose = config.autoClose;
        this.$dropdownService._isOpen.next(this._open);
        this._zoneSubscription = _ngZone.onStable.subscribe( () => {
            this._positionMenu();
        } );
        this._isOpenSubscription = $dropdownService._isOpen.subscribe(status => {
           this.show = status;
        });
        this._onToggleChangeSubscription = $dropdownService.onToggleChange.subscribe(() => {
            this.toggle();
        });
    }

    ngOnInit() {
        if ( this._menu ) {
            this._menu.applyPlacement( Array.isArray( this.placement ) ? (this.placement[0]) : this.placement as Placement );
        }

        if ( this._open ) {
            this._setCloseHandlers();
        }
    }

    /**
     * Checks if the dropdown menu is open or not.
     */
    isOpen(): boolean {
        return this._open;
    }

    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     */
    open(): void {
        if ( !this._open ) {
            this._open = true;
            this._positionMenu();
            this.$dropdownService._isOpen.next(true);
            this.openChange.emit( true );
            this._setCloseHandlers();
        }
    }

    private _setCloseHandlers() {
        ngcAutoClose(
            this._ngZone, this._document, this.autoClose, () => this.close(), this._closed$,
            this._menu ? [this._menu.getNativeElement()] : [], this._anchor ? [this._anchor.getNativeElement()] : [] );
    }

    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     */
    close(): void {
        if ( this._open ) {
            this._open = false;
            this._closed$.next();
            this.$dropdownService._isOpen.next(false);
            this.openChange.emit( false );
            this._changeDetector.markForCheck();
        }
    }

    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    toggle(): void {
        if ( this.isOpen() ) {
            this.close();
        } else {
            this.open();
        }
    }

    ngOnDestroy() {
        this._closed$.next();
        this._zoneSubscription.unsubscribe();
        this._onToggleChangeSubscription.unsubscribe();
        this._isOpenSubscription.unsubscribe();
    }

    onKeyDown( event: KeyboardEvent ) {
        const itemElements = this._getMenuElements();

        if ( !itemElements.length ) {
            return false;
        }

        let position = -1;
        let isEventFromItems = false;
        const isEventFromToggle = this._isEventFromToggle( event );

        if ( !isEventFromToggle ) {
            itemElements.forEach( ( itemElement, index ) => {
                if ( itemElement.contains( event.target as HTMLElement ) ) {
                    isEventFromItems = true;
                }
                if ( itemElement === this._document.activeElement ) {
                    position = index;
                }
            } );
        }

        if ( isEventFromToggle || isEventFromItems ) {
            if ( !this.isOpen() ) {
                this.open();
            }
            // tslint:disable-next-line:deprecation
            switch ( event.which ) {
                case Key.ArrowDown:
                    position = Math.min( position + 1, itemElements.length - 1 );
                    break;
                case Key.ArrowUp:
                    if ( this._isDropup() && position === -1 ) {
                        position = itemElements.length - 1;
                        break;
                    }
                    position = Math.max( position - 1, 0 );
                    break;
                case Key.Home:
                    position = 0;
                    break;
                case Key.End:
                    position = itemElements.length - 1;
                    break;
            }
            itemElements[position].focus();
            event.preventDefault();
        }
    }

    private _isDropup(): boolean {
        return this._elementRef.nativeElement.classList.contains( 'dropup' );
    }

    private _isEventFromToggle( event: KeyboardEvent ) {
        return this._anchor.getNativeElement().contains( event.target as HTMLElement );
    }

    private _getMenuElements(): HTMLElement[] {
        if ( this._menu == null ) {
            return [];
        }
        return this._menu.menuItems.filter( item => !item.disabled ).map( item => item.elementRef.nativeElement );
    }

    private _positionMenu() {
        if ( this.isOpen() && this._menu ) {
            this._menu.position( this._anchor.anchorEl, this.placement );
        }
    }
}
