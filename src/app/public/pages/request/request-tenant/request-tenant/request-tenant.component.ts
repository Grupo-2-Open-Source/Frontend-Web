import {AfterViewInit, Component, OnInit} from '@angular/core';

import {RequestTenant} from "../../../../model/request-tenant";

import {RequestTenantService} from "../../../../services/request-tenant.service";
import {ActivatedRoute} from "@angular/router";
import {RegisterTenantService} from "../../../../services/register-tenant.service";

@Component({
  selector: 'app-request-tenant',
  templateUrl: './request-tenant.component.html',
  styleUrls: ['./request-tenant.component.css']
})
export class RequestTenantComponent implements OnInit, AfterViewInit {
  user: any;
  constructor(private route: ActivatedRoute,private userService: RegisterTenantService) {
  }
  ngAfterViewInit() {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['id']; // Obtén el id del usuario de la URL
      this.userService.getrentrequests(userId).subscribe((data:any) => {
        this.user = data;

      });
    });


  }
}
