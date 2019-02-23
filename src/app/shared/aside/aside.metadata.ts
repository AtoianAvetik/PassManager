// Aside route metadata
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    badge: string;
    badgeClass: string;
    isExternalLink: boolean;
    submenu: RouteInfo[];
}

export interface RoutesSection {
    title?: string;
    routes: RouteInfo[];
}
