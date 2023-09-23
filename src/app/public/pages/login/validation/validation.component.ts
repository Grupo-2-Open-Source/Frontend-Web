import { Component } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  email='';
  code='';
  password='';
  newpassword='';
  clickAddTodo() {
    alert('Se envio un código de acceso a su correo!');
  }
}
