import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AnalyticsViewComponent } from './components/pages/analytics/analytics-view/analytics-view.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';
import { ServiceViewComponent } from './components/pages/service/service-view/service-view.component';
import { EmployeeViewComponent } from './components/pages/employee/employee-view/employee-view.component';
import { SettingsViewComponent } from './components/pages/settings/settings-view/settings-view.component';

import { AuthGuardService } from './services/auth-guard.service';

const app_routes: Routes = [
    // Home Route
    { path: 'home',
      component: HomeComponent,
      // canActivate: [ AuthGuardService ]
    },

    // Login Route
    { path: 'login',
      component: LoginComponent,
      // canActivate: [ AuthGuardService ]
    },

    // Client Route
    { path: 'client-view',
      component: ClientViewComponent,
      canActivate: [ AuthGuardService ]
    },

    // Service Route
    { path: 'service-view',
      component: ServiceViewComponent,
      canActivate: [ AuthGuardService ]
    },

    // Employee Route
    { path: 'employee-view',
      component: EmployeeViewComponent,
      canActivate: [ AuthGuardService ]
    },

    // Settings Route
    { path: 'settings-view',
      component: SettingsViewComponent,
      canActivate: [ AuthGuardService ]
    },

    // Analitics Route
    { path: 'analytics-view',
      component: AnalyticsViewComponent,
      canActivate: [ AuthGuardService ]
    },

    // Default Route
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
