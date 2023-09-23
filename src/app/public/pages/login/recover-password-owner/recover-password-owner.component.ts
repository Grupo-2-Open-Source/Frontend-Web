import { Component } from '@angular/core';

@Component({
  selector: 'app-recover-password-owner',
  templateUrl: './recover-password-owner.component.html',
  styleUrls: ['./recover-password-owner.component.css']
})
export class RecoverPasswordOwnerComponent {
  email='';
  code='';
  clickAddTodo() {
    alert('Se envio un código de acceso a su correo!');
  }


}
