import { Routes, RouterModule } from '@angular/router';

// Route for content layout without aside, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './pages/auth-pages/auth-pages.module#AuthPagesModule'
    }
];
