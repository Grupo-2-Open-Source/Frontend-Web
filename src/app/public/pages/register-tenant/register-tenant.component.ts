import { Component } from '@angular/core';

@Component({
  selector: 'app-register-tenant',
  templateUrl: './register-tenant.component.html',
  styleUrls: ['./register-tenant.component.css']
})
export class RegisterTenantComponent {
  name='';
  lastname='';
  birthdate='';
  phone='';
  email='';
  password='';
}
