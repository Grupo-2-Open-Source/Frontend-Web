import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {RegisterTenantService} from "../../../services/register-tenant.service";

@Component({
  selector: 'app-login-tenant',
  templateUrl: './login-tenant.component.html',
  styleUrls: ['./login-tenant.component.css']
})
export class LoginTenantComponent {
  email = '';
  password = '';

  constructor(
    private router: Router,
    private registerTenantService: RegisterTenantService
  ) {}

  user={email:'',password:''};
  onSubmitt() {
    this.registerTenantService.logins(this.user)
      .subscribe((response) => {
        if (response.messa === "EXITOSO") {
          this.router.navigate(['/tenant/main-page-tenant', response.id]).then(() => {
            console.log('Navegación exitosa');
          });
          localStorage.setItem('id', response.id.toString());
        } else {
          alert("Vuelve a ingresar tus datos");
        }
      });
  }

}
