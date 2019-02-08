import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes Modules
import { LoginComponent } from './components/login/login.component';
import { HomeViewComponent } from './components/pages/home/home-view/home-view.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';
import { ServiceViewComponent } from './components/pages/service/service-view/service-view.component';
import { EmployeeViewComponent } from './components/pages/employee/employee-view/employee-view.component';
import { SettingsViewComponent } from './components/pages/settings/settings-view/settings-view.component';
import { AnalyticsViewComponent } from './components/pages/analytics/analytics-view/analytics-view.component';
import { AutomobileViewComponent } from './components/pages/automobile/automobile-view/automobile-view.component';

// Auth Services
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // Login Route
  { path: 'login',
    component: LoginComponent,
    // canActivate: [ AuthGuardService ]
  },

  // Home Route
  { path: 'home-view',
  component: HomeViewComponent,
  canActivate: [ AuthGuardService ]
  },

  // Automobile Route
  { path: 'client-view/:id',
    component: AutomobileViewComponent,
    canActivate: [ AuthGuardService ]
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
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
