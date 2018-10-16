import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { app_routing } from './app.routes';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BackgroundComponent } from './components/background/background.component';
import { ClientFormComponent } from './components/pages/client/client-form/client-form.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';
import { ServiceViewComponent } from './components/pages/service/service-view/service-view.component';
import { ServiceFormComponent } from './components/pages/service/service-form/service-form.component';
import { EmployeeViewComponent } from './components/pages/employee/employee-view/employee-view.component';
import { EmployeeFormComponent } from './components/pages/employee/employee-form/employee-form.component';
import { SettingsViewComponent } from './components/pages/settings/settings-view/settings-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    ClientFormComponent,
    ClientViewComponent,
    ServiceViewComponent,
    ServiceFormComponent,
    EmployeeViewComponent,
    EmployeeFormComponent,
    LoginComponent,
    BackgroundComponent,
    SettingsViewComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
