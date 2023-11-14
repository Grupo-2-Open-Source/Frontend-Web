import { Component } from '@angular/core';
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {Router} from "@angular/router";
import {RegisterTenantService} from "../../../services/register-tenant.service";

@Component({
  selector: 'app-register-tenant',
  templateUrl: './register-tenant.component.html',
  styleUrls: ['./register-tenant.component.css']
})
export class RegisterTenantComponent {
  user = {email: '', password: '',lastName:'',firstName:'',birthDate:'',phoneNumber:'' };
  constructor(private userService: RegisterTenantService, private router: Router) {}
  onSubmit() {
    this.userService.addUsertenant(this.user).subscribe((data:any) => {
      console.log('Usuario creado:', data);
      this.user = {email: '', password: '',lastName:'',firstName:'',birthDate:'',phoneNumber:'' };
      this.userService.setCurrentUserId(data.id);
    //  this.router.navigate(['/validation']);
    });
  }
}
