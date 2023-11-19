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
  profile = {imageUrl:'https://imgur.com/YP2XnZT.png',tenantId:0};
  constructor(private userService: RegisterTenantService, private router: Router) {}
  onSubmit() {
    this.userService.addUsertenant(this.user).subscribe((data:any) => {
      console.log('Usuario creado:', data);
      this.user = {email: '', password: '',lastName:'',firstName:'',birthDate:'',phoneNumber:'' };
      this.userService.setCurrentUserId(data.id);

      //creacion predeteterminada de imagen de perfil de owner
      const tenantId = data.id;
      if (tenantId!== null) {
        this.profile.tenantId = tenantId;
        this.userService.addimageprofile(this.profile).subscribe((data: any) => {
          console.log('Imagen de Perfil creada:', data.id);
        });
      } else {
        console.error('Error: ownerId es nulo');
      }

    });
  }
}
