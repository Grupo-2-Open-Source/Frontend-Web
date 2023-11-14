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
  constructor(private userService: RegisterOwnerService, private router: Router) {}
  onSubmit() {
    this.userService.addUser(this.user).subscribe((data:any) => {
      console.log('Usuario creado:', data);
      this.user = {email: '', password: '',lastName:'',firstName:'',birthDate:'',phoneNumber:'' };
      this.userService.setCurrentUserId(data.id);
      this.router.navigate(['/validation']);
    });
  }
}
