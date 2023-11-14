import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import {LoginTenantComponent} from "./public/pages/login/login-tenant/login-tenant.component";
import {LoginOwnerComponent} from "./public/pages/login/login-owner/login-owner.component";
import {RegisterTenantComponent} from "./public/pages/register-user/register-tenant/register-tenant.component";
import {RegisterOwnerComponent} from "./public/pages/register-user/register-owner/register-owner.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {
  RecoverPasswordTenantComponent
} from "./public/pages/login/recover-password-tenant/recover-password-tenant.component";
import {
  RecoverPasswordOwnerComponent
} from "./public/pages/login/recover-password-owner/recover-password-owner.component";
import {RestoreOwnerComponent} from "./public/pages/login/restore-owner/restore-owner.component";
import {RestoreTenantComponent} from "./public/pages/login/restore-tenant/restore-tenant.component";
import {ValidationComponent} from "./public/pages/login/validation/validation.component";
import {MainPageTenantComponent} from "./public/pages/main-page-tenant/main-page-tenant.component";
import {MainPageOwnerComponent} from "./public/pages/main-page-owner/main-page-owner.component";
import {
  NotificationsOwnerComponent
} from "./public/pages/main-page-owner/notifications-owner/notifications-owner.component";
import {ShareAutoTenantComponent} from "./public/pages/main-page-tenant/share-auto-tenant/share-auto-tenant.component";
import {
  MaintenanceTenantComponent
} from "./public/pages/main-page-tenant/maintenance-tenant/maintenance-tenant.component";
import {
  VehicleRegistrationOwnerComponent
} from "./public/pages/main-page-owner/vehicle-registration-owner/vehicle-registration-owner.component";
import {
  CreateContractOwnerComponent
} from "./public/pages/main-page-owner/create-contract-owner/create-contract-owner.component";
import {RentOwnerComponent} from "./public/pages/main-page-owner/rent-owner/rent-owner.component";
import {RentTenantComponent} from "./public/pages/main-page-tenant/rent-tenant/rent-tenant.component";
import {PayCarRentalComponent} from "./public/pages/main-page-tenant/pay-car-rental/pay-car-rental.component";
import {ProfileOwnerComponent} from "./public/pages/profile-user/profile-owner/profile-owner/profile-owner.component";
import {ProfileTenantComponent} from "./public/pages/profile-user/profile-tenant/profile-tenant.component";
import {RequestTenantComponent} from "./public/pages/request/request-tenant/request-tenant/request-tenant.component";
import {ToolbarComponent} from "./public/pages/component/toolbar-tenant/toolbar.component";
import {ToolbarOwnerComponent} from "./public/pages/component/toolbar-owner/toolbar-owner.component";
import {NuevoComponent} from "./public/pages/prueba/nuevo/nuevo.component";



const routes:Routes=[
  {path: 'login-tenant',component:LoginTenantComponent},
  {path: 'login-owner',component:LoginOwnerComponent},
  {path: 'register-tenant',component:RegisterTenantComponent},
  {path: 'register-owner',component:RegisterOwnerComponent},
  {path: 'recover-password-tenant',component:RecoverPasswordTenantComponent},
  {path: 'recover-password-owner',component:RecoverPasswordOwnerComponent},
  {path: 'restore-owner',component:RestoreOwnerComponent},
  {path: 'restore-tenant',component:RestoreTenantComponent},
  {path: 'validation',component:ValidationComponent},
  {path: 'prueba',component:NuevoComponent},

  {path: 'tenant',
    component:ToolbarComponent,
    children:[
      {
        path:'main-page-tenant/:id',
        component:MainPageTenantComponent
      },
      {
        path:'share-auto-tenant',
        component:ShareAutoTenantComponent
      },
      {
        path:'maintenance-tenant',
        component: MaintenanceTenantComponent
      },
      {
        path:'rent-tenant',
        component: RentTenantComponent
      },
      {
        path: 'pay-car-rental',
        component: PayCarRentalComponent
      },
      {
        path:'requests-tenant',
        component: RequestTenantComponent
      },
      {
        path:'perfil-tenant/:id',
        component: ProfileTenantComponent
      },
    ]
  },

  {path:'owner',
  component:ToolbarOwnerComponent,
  children:[
    {path: 'main-page-owner/:id',component:MainPageOwnerComponent},
    {path: 'notifications-owner',component:NotificationsOwnerComponent},
    {path: 'vehicle-registration-owner/:id', component: VehicleRegistrationOwnerComponent},
    {path: 'create-contract-owner', component: CreateContractOwnerComponent},
    {path: 'rent-owner/:id', component: RentOwnerComponent},
    {path:'perfil-owner/:id',component: ProfileOwnerComponent},
  ]
  },
  {path:'',redirectTo:'login-tenant',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
]

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],exports:[RouterModule]

})
export class AppRoutingModule { }
