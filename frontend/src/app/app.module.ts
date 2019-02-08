import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Charts
import { ChartsModule } from 'ng2-charts';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';

// Pages Components
import { HomeViewComponent } from './components/pages/home/home-view/home-view.component';
import { HomeFormComponent } from './components/pages/home/home-form/home-form.component';
import { ClientFormComponent } from './components/pages/client/client-form/client-form.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';
import { ServiceViewComponent } from './components/pages/service/service-view/service-view.component';
import { ServiceFormComponent } from './components/pages/service/service-form/service-form.component';
import { EmployeeViewComponent } from './components/pages/employee/employee-view/employee-view.component';
import { EmployeeFormComponent } from './components/pages/employee/employee-form/employee-form.component';
import { SettingsViewComponent } from './components/pages/settings/settings-view/settings-view.component';
import { AnalyticsViewComponent } from './components/pages/analytics/analytics-view/analytics-view.component';
import { LineChartComponent } from './components/pages/analytics/charts/line-chart/line-chart.component';
import { RadarChartComponent } from './components/pages/analytics/charts/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './components/pages/analytics/charts/polar-area-chart/polar-area-chart.component';
import { BarChartComponent } from './components/pages/analytics/charts/bar-chart/bar-chart.component';
import { AutomobileViewComponent } from './components/pages/automobile/automobile-view/automobile-view.component';
import { AutomobileFormComponent } from './components/pages/automobile/automobile-form/automobile-form.component';
import { UserViewComponent } from './components/pages/user/user-view/user-view.component';
import { UserFormComponent } from './components/pages/user/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BackgroundComponent,
    ClientFormComponent,
    ClientViewComponent,
    ServiceViewComponent,
    ServiceFormComponent,
    EmployeeViewComponent,
    EmployeeFormComponent,
    SettingsViewComponent,
    AnalyticsViewComponent,
    LineChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent,
    BarChartComponent,
    AutomobileViewComponent,
    AutomobileFormComponent,
    UserViewComponent,
    UserFormComponent,
    HomeFormComponent
  ],
  imports: [
    FormsModule,
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
