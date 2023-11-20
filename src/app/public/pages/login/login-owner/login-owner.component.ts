import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {RegisterOwnerService} from "../../../services/register-owner.service";

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent {
  email = '';
  password = '';

  constructor(
    private router: Router,
    private registerOwnerService: RegisterOwnerService
  ) {}

  user={email:'',password:''};
  onSubmit() {
    this.registerOwnerService.logins(this.user)
      .subscribe((response) => {
        if (response.messa === "EXITOSO") {
          this.router.navigate(['/owner/main-page-owner', response.id]).then(() => {
            console.log('Navegación exitosa');
          });
          localStorage.setItem('onid', response.id.toString());
        } else {
          alert("Vuelve a ingresar tus datos");
        }
      });
  }
}
