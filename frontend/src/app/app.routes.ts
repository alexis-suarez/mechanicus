import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';
import { ServiceViewComponent } from './components/pages/service/service-view/service-view.component';
import { EmployeeViewComponent } from './components/pages/employee/employee-view/employee-view.component';

const app_routes: Routes = [
    // Home Route
    { path: 'home', component: HomeComponent },

    // Login Route
    { path: 'login', component: LoginComponent },

    // Client Route
    { path: 'client-view', component: ClientViewComponent},

    // Service Route
    { path: 'service-view', component: ServiceViewComponent},

    // Employee Route
    { path: 'employee-view', component: EmployeeViewComponent},

    // Default Route
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);