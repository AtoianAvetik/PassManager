import { Routes, RouterModule } from '@angular/router';

// Route for content layout with aside, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'components',
        loadChildren: './pages/components/components.module#ComponentsModule'
    },
    {
        path: 'passwords',
        loadChildren: './pages/passwords/passwords.module#PasswordsModule'
    },
    {
        path: 'forms',
        loadChildren: './pages/forms/forms.module#FormModule'
    },
    {
        path: 'uikit',
        loadChildren: './pages/ui-kit/ui-kit.module#UIKitModule'
    },
    {
        path: 'colorpalettes',
        loadChildren: './pages/color-palette/color-palette.module#ColorPaletteModule'
    },
    {
        path: 'base',
        loadChildren: './pages/base/base.module#BaseModule'
    },
    {
        path: 'angular-material',
        loadChildren: './pages/angular-material/angular-material.module#AngularMaterialModule'
    },
    {
        path: 'theme-configurator',
        loadChildren: './pages/theme-configurator/theme-configurator.module#ThemeConfiguratorModule'
    },
];
