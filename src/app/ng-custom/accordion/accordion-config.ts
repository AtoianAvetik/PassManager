import {Injectable} from '@angular/core';

/**
 * Configuration service for the NgcAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgcAccordionConfig {
  closeOthers = true;
  type: string;
  bg: string;
}
