import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginOwnerService} from "../../../services/login-owner.service";

@Component({
  selector: 'app-toolbar-owner',
  templateUrl: './toolbar-owner.component.html',
  styleUrls: ['./toolbar-owner.component.css']
})
export class ToolbarOwnerComponent {
  constructor(private router: Router, private authService: LoginOwnerService) {}

  goToProfile() {
    // Obtén el ID del usuario del servicio
    const userId = this.authService.getCurrentUserId();

    // Redirige al usuario a la página de perfil con el ID del usuario
    this.router.navigate(['/owner/perfil-owner', userId]);
  }
}
