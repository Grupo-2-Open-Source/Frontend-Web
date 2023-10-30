import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent {
  email='';
  password='';
  constructor(private http: HttpClient) {}

  // onSubmit() {
  //   // Define el objeto userData con los datos del formulario
  //   const userData = {
  //     email: this.email,
  //     password: this.password
  //   };
  //
  //   // Realiza la solicitud HTTP POST para guardar los datos del usuario
  //   this.http.post('http://localhost:3000/api/v1/users', userData).subscribe(
  //     (response) => {
  //       // Handle the response
  //       console.log('Data saved:', response);
  //     },
  //     (error) => {
  //       // Handle the error
  //       console.error('Error:', error);
  //     }
  //   );
  // }

}
