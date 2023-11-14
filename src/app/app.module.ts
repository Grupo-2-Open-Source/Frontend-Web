import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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


import { MaintenanceTenantComponent } from './public/pages/main-page-tenant/maintenance-tenant/maintenance-tenant.component';



import { MainPageOwnerComponent } from './public/pages/main-page-owner/main-page-owner.component';
import { NotificationsOwnerComponent } from './public/pages/main-page-owner/notifications-owner/notifications-owner.component';
import { VehicleRegistrationOwnerComponent } from './public/pages/main-page-owner/vehicle-registration-owner/vehicle-registration-owner.component';
import { CreateContractOwnerComponent } from './public/pages/main-page-owner/create-contract-owner/create-contract-owner.component';
import { RentOwnerComponent } from './public/pages/main-page-owner/rent-owner/rent-owner.component';
import { RentTenantComponent } from './public/pages/main-page-tenant/rent-tenant/rent-tenant.component';
import { PayCarRentalComponent } from './public/pages/main-page-tenant/pay-car-rental/pay-car-rental.component';
import {ProfileOwnerComponent} from "./public/pages/profile-user/profile-owner/profile-owner/profile-owner.component";
import {ProfileTenantComponent} from "./public/pages/profile-user/profile-tenant/profile-tenant.component";
import {MatListModule} from "@angular/material/list";
import {RequestTenantComponent} from "./public/pages/request/request-tenant/request-tenant/request-tenant.component";
import { ToolbarComponent } from './public/pages/component/toolbar-tenant/toolbar.component';
import { ToolbarOwnerComponent } from './public/pages/component/toolbar-owner/toolbar-owner.component';
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {RentdTenantService} from "./public/services/rentd-tenant.service";
import { NuevoComponent } from './public/pages/prueba/nuevo/nuevo.component';
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {RequestTenantService} from "./public/services/request-tenant.service";
import {FileUploadModule} from "primeng/fileupload";
import {RegisterOwnerService} from "./public/services/register-owner.service";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

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
    MaintenanceTenantComponent,
    MainPageOwnerComponent,
    NotificationsOwnerComponent,
    VehicleRegistrationOwnerComponent,
    CreateContractOwnerComponent,
    RentOwnerComponent,
    RentTenantComponent,
    PayCarRentalComponent,
    RequestTenantComponent,
    ProfileOwnerComponent,
    ProfileTenantComponent,
    ToolbarComponent,
    ToolbarOwnerComponent,
    NuevoComponent,


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
    NgIf,
    MatSnackBarModule,
    MatListModule,
    CarouselModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    ImageModule,
    FileUploadModule,
    //"locationId":"northamerica-northeast1"
    provideFirebaseApp(() => initializeApp({"projectId":"autoyadeploy-324fd","appId":"1:135558029592:web:7199f449cbc52662153e6d","storageBucket":"autoyadeploy-324fd.appspot.com","apiKey":"AIzaSyBFENhb7mn8C0qMqS8WQgnhRd4jwg9rKuY","authDomain":"autoyadeploy-324fd.firebaseapp.com","messagingSenderId":"135558029592"})),
    provideStorage(() => getStorage()),
  ],
  exports:[
  MatButtonModule,
  MatIconModule,
  ],
  providers: [RentdTenantService,RequestTenantService,RegisterOwnerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
