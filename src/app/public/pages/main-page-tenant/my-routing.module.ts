import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageTenantComponent} from "./main-page-tenant.component";
import {ShareAutoTenantComponent} from "./share-auto-tenant/share-auto-tenant.component";
import {LoginTenantComponent} from "../login/login-tenant/login-tenant.component";
import {ValidationComponent} from "../login/validation/validation.component";


const routes: Routes = [
  { path: 'main-page-tenant', component: MainPageTenantComponent ,children:[
  { path: 'validation', component: ShareAutoTenantComponent}]}, // Ruta con parámetro
// Redirecciona a padre por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MyRoutingModule {}
