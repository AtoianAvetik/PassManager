import { InjectionToken } from '@angular/core';

export const NGC_PANEL_CONFIG = new InjectionToken( 'Panel configuration' );
export const DEFAULT_NGC_PANEL_CONFIG: NgcPanelConfigInterface = {
    leftPanelExpandedShift: 0,
    leftPanelCollapsedShift: 0,
    rightPanelExpandedShift: 0,
    rightPanelCollapsedShift: 0
};

export interface NgcPanelConfigInterface {
    leftPanelExpandedShift?: number;
    leftPanelCollapsedShift?: number;
    rightPanelExpandedShift?: number;
    rightPanelCollapsedShift?: number;
}

export declare class NgcPanelConfig implements NgcPanelConfigInterface {
    leftPanelExpandedShift?: number;
    leftPanelCollapsedShift?: number;
    rightPanelExpandedShift?: number;
    rightPanelCollapsedShift?: number;

    constructor( config?: NgcPanelConfigInterface );

    assign( config?: NgcPanelConfigInterface ): void;
}
