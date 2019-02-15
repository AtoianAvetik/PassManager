import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

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
        path: 'cards',
        loadChildren: './pages/cards/cards.module#CardsModule'
    },
    {
        path: 'forms',
        loadChildren: './pages/forms/forms.module#FormModule'
    }
];
