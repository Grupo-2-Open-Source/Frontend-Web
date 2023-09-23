import { Component } from '@angular/core';
import {
  RecoverPasswordTenantComponent
} from "./public/pages/login/recover-password-tenant/recover-password-tenant.component";
import {
  RecoverPasswordOwnerComponent
} from "./public/pages/login/recover-password-owner/recover-password-owner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Web-Application';
  options=[
    {path:'/login-tenant',title:'LOGIN1'},
    {path:'/login-owner',title:'LOGIN2'},
    {path:'/register-tenant',title: 'REGISTER1'},
    {path:'/register-owner',title: 'REGISTER2'},
    {path: '/recover-password-tenant',title:'RecoverPasswordTenantComponent'},
    {path: '/recover-password-owner',title:'RecoverPasswordOwnerComponent'},
  ]
}
