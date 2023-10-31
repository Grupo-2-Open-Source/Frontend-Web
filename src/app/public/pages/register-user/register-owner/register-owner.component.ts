import { Component } from '@angular/core';
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent {

  user = {name: '', lastname: '',birthdate:'',phone:'',email:'',password:'' };
  constructor(private userService: RegisterOwnerService, private router: Router) {}
  onSubmit() {
    this.userService.addUser(this.user).subscribe((data:any) => {
      console.log('Usuario creado:', data);
      this.user = { name: '', lastname: '',birthdate:'',phone:'',email:'',password:''  };
      this.userService.setCurrentUserId(data.id);
      this.router.navigate(['/validation']);
    });
  }
}
