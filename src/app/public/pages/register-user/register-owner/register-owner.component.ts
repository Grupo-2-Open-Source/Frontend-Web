import { Component } from '@angular/core';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent {
  name='';
  lastname='';
  birthdate='';
  phone='';
  email='';
  password='';
}
