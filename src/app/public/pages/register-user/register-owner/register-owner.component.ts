import { Component } from '@angular/core';
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent {

  user = {email: '', password: '',lastName:'',firstName:'',birthDate:'',phoneNumber:'' };
  profile = {imageUrl:'https://imgur.com/YP2XnZT.png',ownerId:0};

  constructor(private userService: RegisterOwnerService, private router: Router) {}
  onSubmit() {
    this.userService.addUser(this.user).subscribe((data:any) => {
      console.log('Usuario creado:', data);
      this.user = {email: '', password: '',lastName:'',firstName:'',birthDate:'',phoneNumber:'' };
      this.userService.setCurrentUserId(data.id);
      //creacion predeteterminada de imagen de perfil de owner
      const ownerId = data.id;
      if (ownerId !== null) {
        this.profile.ownerId = ownerId;
        this.userService.addimageprofile(this.profile).subscribe((data: any) => {
          console.log('Imagen de Perfil creada:', data.id);
        });
      } else {
        console.error('Error: ownerId es nulo');
      }
    });
  }
}
