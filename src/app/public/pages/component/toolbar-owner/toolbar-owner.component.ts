import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";

@Component({
  selector: 'app-toolbar-owner',
  templateUrl: './toolbar-owner.component.html',
  styleUrls: ['./toolbar-owner.component.css']
})
export class ToolbarOwnerComponent {
  userId: number | null;
  constructor(private router: Router, private authService: RegisterOwnerService) {
    this.userId = this.authService.getOwnerId();
  }
  goToProfile() {
    const userId = this.authService.getOwnerId()
    this.router.navigate(['/owner/perfil-owner', userId]);
  }
}
