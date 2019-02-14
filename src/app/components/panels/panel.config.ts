import { InjectionToken } from '@angular/core';
export const PANEL_CONFIG = new InjectionToken('Panel configuration');
export const DEFAULT_PANEL_CONFIG: PanelConfigInterface = {
    leftPanelExpandedShift: 0,
    leftPanelCollapsedShift: 0,
    rightPanelExpandedShift: 0,
    rightPanelCollapsedShift: 0
};
export interface PanelConfigInterface {
    leftPanelExpandedShift?: number;
    leftPanelCollapsedShift?: number;
    rightPanelExpandedShift?: number;
    rightPanelCollapsedShift?: number;
}
export declare class PanelConfig implements PanelConfigInterface {
    leftPanelExpandedShift?: number;
    leftPanelCollapsedShift?: number;
    rightPanelExpandedShift?: number;
    rightPanelCollapsedShift?: number;
    constructor(config?: PanelConfigInterface);
    assign(config?: PanelConfigInterface): void;
}
