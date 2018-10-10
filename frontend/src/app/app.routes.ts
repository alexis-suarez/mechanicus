import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },

    // Client Routes
    { path: 'client-view', component: ClientViewComponent},

    // Default Route
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);