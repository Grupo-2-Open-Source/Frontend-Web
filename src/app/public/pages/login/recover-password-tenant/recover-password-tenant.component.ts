import { Component } from '@angular/core';

@Component({
  selector: 'app-recover-password-tenant',
  templateUrl: './recover-password-tenant.component.html',
  styleUrls: ['./recover-password-tenant.component.css']
})
export class RecoverPasswordTenantComponent {
  email='';
  code='';
  clickAddTodo() {
    alert('Se envio un código de acceso a su correo!');
  }
}
