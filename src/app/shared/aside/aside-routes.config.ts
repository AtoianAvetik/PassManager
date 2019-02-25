import { RoutesSection } from './aside.metadata';

// Aside menu Routes and data
export const ROUTES: RoutesSection[] = [
    {
        routes: [
            { path: '/theme-configurator', title: 'Theme Configurator', icon: 'ft-settings', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        title: 'Components',
        routes: [
            {
                path: '/base', title: 'Base', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    {
                        path: '/base/components', title: 'Components', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                            { path: '/base/alert', title: 'Alert', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/badge', title: 'Badge', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/breadcrumb', title: 'Breadcrumb', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/button-group', title: 'Button Group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/cards', title: 'Card', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                                    { path: '/base/cards/basic', title: 'Basic Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                                    { path: '/base/cards/advanced', title: 'Advanced Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                                ]
                            },
                            { path: '/base/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/accordions', title: 'Accordions', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/list-group', title: 'List group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/modals', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/navs', title: 'Navs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/navbar', title: 'Navbar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/spinners', title: 'Spinners', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/loaders', title: 'Loaders', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/notifications', title: 'Notifications', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/panels', title: 'Panels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/popovers', title: 'Popovers', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/progress', title: 'Progress', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/tooltips', title: 'Tooltips', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/scrollspy', title: 'Scrollspy', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/base/tables', title: 'Tables', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                        ]
                    },
                ]
            },
            { path: '/colorpalettes', title: 'Color Palette', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {
                path: '/components', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/smart-list-page', title: 'Smart list', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/smart-folders-page', title: 'Smart folders', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '/bootstrap', title: 'Bootstrap', icon: 'ft-box', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger', isExternalLink: false, submenu: [
                    { path: '/components/lists', title: 'List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/inputgroups', title: 'Input Groups', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '/forms', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary', isExternalLink: false,
                submenu: [
                    {
                        path: '/forms/elements', title: 'Elements', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                        submenu: [
                            { path: '/forms/inputs', title: 'Inputs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/forms/input-groups', title: 'Input Group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/forms/input-grid', title: 'Input Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                        ]
                    },
                    {
                        path: '/forms/layouts', title: 'Layouts', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                        submenu: [
                            { path: '/forms/basic', title: 'Basic Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/forms/horizontal', title: 'Horizontal Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/forms/hidden-labels', title: 'Hidden Labels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/forms/form-actions', title: 'Form Actions', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/forms/bordered', title: 'Bordered Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/forms/striped-rows', title: 'Striped Rows', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                        ]
                    },
                ]
            },
            {
                path: '/uikit', title: 'UI Kit', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [

                    { path: '/uikit/grids', title: 'Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/typography', title: 'Typography', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/helperclasses', title: 'Helper Classes', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/textutilities', title: 'Text Utilities', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

                    {
                        path: '/uikit/icons', title: 'Icons', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                            { path: '/uikit/feather', title: 'Feather Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/uikit/font-awesome', title: 'Font Awesome Icons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/uikit/line-awesome', title: 'Line Awesome Icons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: '/uikit/weather-icons', title: 'Weather Icons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                        ]
                    },

                ]
            },
            {   path: '/angular-material', title: 'Angular Material', icon: 'ft-aperture', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {   path: '/passwords', title: 'Passwords', icon: 'ft-lock', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        title: 'Custom',
        routes: [

        ]
    }
];
