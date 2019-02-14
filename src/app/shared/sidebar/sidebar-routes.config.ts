import { RouteInfo } from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
	{
		path: '/components', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
			{ path: '/components/panels-page', title: 'Panels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
			{ path: '/components/loaders-page', title: 'Loaders', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
			{ path: '/components/notifications-page', title: 'Notifications', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
			{ path: '/components/modals-page', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
			{ path: '/components/accordion-page', title: 'Accordion', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
			{ path: '/components/smart-list-page', title: 'Smart list', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
			{ path: '/components/smart-folders-page', title: 'Smart folders', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
		]
	},
    {   path: '/passwords', title: 'Passwords', icon: 'ft-lock', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
];
