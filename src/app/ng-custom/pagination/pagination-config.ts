import {Injectable} from '@angular/core';

/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgcPaginationConfig {
    disabled = false;
    boundaryLinks = false;
    directionLinks = true;
    ellipses = true;
    maxSize = 0;
    pageSize = 10;
    rotate = false;
    size: 'sm' | 'lg';
}
