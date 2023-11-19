import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RentedVehicles} from "../../../model/rented-vehicles";
import {RentdTenantService} from "../../../services/rentd-tenant.service";
import {Router} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {RegisterTenantService} from "../../../services/register-tenant.service";

@Component({
  selector: 'app-toolbar-tenant',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  userId: number | null;
  constructor(private router: Router, private authService: RegisterTenantService) {
    this.userId = this.authService.getTenantId();
  }
  goToProfile() {
    const userId = this.authService.getTenantId()
    this.router.navigate(['/tenant/perfil-tenant', userId]);
  }

}
