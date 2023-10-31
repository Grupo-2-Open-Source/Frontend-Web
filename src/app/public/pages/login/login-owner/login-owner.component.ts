import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginOwnerService} from "../../../services/login-owner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent {
  user = {email: '', password: '' };

  constructor(private userService: LoginOwnerService, private router: Router) {}

  onSubmit() {
    this.userService.addUser(this.user).subscribe((data:any) => {
      console.log('Usuario creado:', data);
      this.user = { email: '', password: '' };
      this.userService.setCurrentUserId(data.id);
      this.router.navigate(['/owner/main-page-owner',data.id]);
    });
  }

}
