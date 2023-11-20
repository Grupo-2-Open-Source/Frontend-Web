import {Component} from '@angular/core';
import {Storage} from "@angular/fire/storage";
import {ActivatedRoute} from "@angular/router";
import {RegisterTenantService} from "../../services/register-tenant.service";


@Component({
  selector: 'app-main-page-tenant',
  templateUrl: './main-page-tenant.component.html',
  styleUrls: ['./main-page-tenant.component.css'],
})
export class MainPageTenantComponent {
  userId: number | null;
  country='';
  constructor(private storage: Storage,private route: ActivatedRoute, private userService: RegisterTenantService) {
    this.userId = this.userService.getTenantId();
  }



}
