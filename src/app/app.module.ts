import { NgModule } from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
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
import {NgIf, NgOptimizedImage} from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { RecoverPasswordTenantComponent } from './public/pages/login/recover-password-tenant/recover-password-tenant.component';
import { RecoverPasswordOwnerComponent } from './public/pages/login/recover-password-owner/recover-password-owner.component';
import { RestoreTenantComponent } from './public/pages/login/restore-tenant/restore-tenant.component';
import { RestoreOwnerComponent } from './public/pages/login/restore-owner/restore-owner.component';
import { ValidationComponent } from './public/pages/login/validation/validation.component';
import { MainPageTenantComponent } from './public/pages/main-page-tenant/main-page-tenant.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from "@angular/material/sidenav";
import { ShareAutoTenantComponent } from './public/pages/main-page-tenant/share-auto-tenant/share-auto-tenant.component';
import {MyRoutingModule} from "./public/pages/main-page-tenant/my-routing.module";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {NgbCarousel, NgbCarouselModule, NgbModule, NgbSlide} from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
    RestoreTenantComponent,
    RestoreOwnerComponent,
    ValidationComponent,
    MainPageTenantComponent,
    ShareAutoTenantComponent,



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
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MyRoutingModule,
    NgbCarousel,
    NgbCarouselModule,
    NgIf,
    NgbSlide,
    NgbModule,
    SlickCarouselModule
  ],
  exports:[
  MatButtonModule,
  MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
