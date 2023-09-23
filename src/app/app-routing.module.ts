import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import {LoginTenantComponent} from "./public/pages/login-tenant/login-tenant.component";
import {LoginOwnerComponent} from "./public/pages/login-owner/login-owner.component";
import {RegisterTenantComponent} from "./public/pages/register-tenant/register-tenant.component";
import {RegisterOwnerComponent} from "./public/pages/register-owner/register-owner.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";



const routes:Routes=[
  {path: 'login-tenant',component:LoginTenantComponent},
  {path: 'login-owner',component:LoginOwnerComponent},
  {path: 'register-tenant',component:RegisterTenantComponent},
  {path: 'register-owner',component:RegisterOwnerComponent},
  {path:'',redirectTo:'login-tenant',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
  // al final colocar pagenout
]

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],exports:[RouterModule]

})
export class AppRoutingModule { }
