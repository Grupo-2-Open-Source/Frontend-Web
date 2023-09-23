import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginTenantComponent } from './public/pages/login/login-tenant/login-tenant.component';
import { LoginOwnerComponent } from './public/pages/login/login-owner/login-owner.component';
import { RegisterTenantComponent } from './public/pages/register-user/register-tenant/register-tenant.component';
import { RegisterOwnerComponent } from './public/pages/register-user/register-owner/register-owner.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { NgOptimizedImage } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

import { RecoverPasswordTenantComponent } from './public/pages/login/recover-password-tenant/recover-password-tenant.component';
import { RecoverPasswordOwnerComponent } from './public/pages/login/recover-password-owner/recover-password-owner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginTenantComponent,
    LoginOwnerComponent,
    RegisterTenantComponent,
    RegisterOwnerComponent,
    PageNotFoundComponent,
    RecoverPasswordTenantComponent,
    RecoverPasswordOwnerComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
    MatInputModule,
    MatSelectModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
