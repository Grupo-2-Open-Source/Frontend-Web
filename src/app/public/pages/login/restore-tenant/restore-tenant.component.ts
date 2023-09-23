import { Component } from '@angular/core';

@Component({
  selector: 'app-restore-tenant',
  templateUrl: './restore-tenant.component.html',
  styleUrls: ['./restore-tenant.component.css']
})
export class RestoreTenantComponent {
  email='';
  password='';
  newpassword='';
  clickAddTodo() {
    alert('Se envio un código de acceso a su correo!');
  }
}
