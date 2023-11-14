import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {RegisterTenantService} from "../../../services/register-tenant.service";

@Component({
  selector: 'app-profile-tenant',
  templateUrl: './profile-tenant.component.html',
  styleUrls: ['./profile-tenant.component.css']
})
export class ProfileTenantComponent implements OnInit{
  user: any;
  constructor(private route: ActivatedRoute, private userService: RegisterTenantService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      this.userService.getUserById(userId).subscribe((data:any) => {
        this.user = data;
      });
    });
  }
}
