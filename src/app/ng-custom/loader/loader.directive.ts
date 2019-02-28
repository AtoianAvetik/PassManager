import {
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    Input,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import { NgcLoaderComponent } from './loader.component';
import { NgcLoader } from './loader.model';

@Directive( {
    selector: '[ngcLoader]'
} )
export class NgcLoaderDirective implements OnInit {
    @Input( 'ngcLoader' ) id: string;
    container: ViewContainerRef;
    componentRef: ComponentRef<NgcLoader>;

    constructor( private resolver: ComponentFactoryResolver,
                 private viewContainerRef: ViewContainerRef,
                 private elRef: ElementRef ) {
    }

    ngOnInit() {
        if ( !this.id ) {
            console.error( 'loader must have an id' );
            return;
        }

        const factory: ComponentFactory<NgcLoader> = this.resolver.resolveComponentFactory( NgcLoaderComponent );
        this.viewContainerRef.clear();

        this.componentRef = this.viewContainerRef.createComponent( factory );
        this.componentRef.instance.id = this.id;

        this.elRef.nativeElement.appendChild( this.componentRef.location.nativeElement );
    }
}
