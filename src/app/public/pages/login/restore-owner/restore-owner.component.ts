import { Component } from '@angular/core';

@Component({
  selector: 'app-restore-owner',
  templateUrl: './restore-owner.component.html',
  styleUrls: ['./restore-owner.component.css']
})
export class RestoreOwnerComponent {
  email='';
  code='';
  password='';
  newpassword='';
  clickAddTodo() {
    alert('Se envio un código de acceso a su correo!');
  }
}
