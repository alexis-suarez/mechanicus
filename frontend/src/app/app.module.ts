import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { app_routing } from './app.routes';

// Services

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientFormComponent } from './components/pages/client/client-form/client-form.component';
import { ClientViewComponent } from './components/pages/client/client-view/client-view.component';
import { ServiceViewComponent } from './components/pages/service/service-view/service-view.component';
import { ServiceFormComponent } from './components/pages/service/service-form/service-form.component';
import { EmployeeViewComponent } from './components/pages/employee/employee-view/employee-view.component';
import { EmployeeFormComponent } from './components/pages/employee/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
