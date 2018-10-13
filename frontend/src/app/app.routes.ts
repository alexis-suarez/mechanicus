import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';
import { ServiceViewComponent } from './components/pages/service/service-view/service-view.component';
import { EmployeeViewComponent } from './components/pages/employee/employee-view/employee-view.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },

    // Client Routes
    { path: 'client-view', component: ClientViewComponent},

    // Service Routes
    { path: 'service-view', component: ServiceViewComponent},

    // Employee Routes
    { path: 'employee-view', component: EmployeeViewComponent},

    // Default Route
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);