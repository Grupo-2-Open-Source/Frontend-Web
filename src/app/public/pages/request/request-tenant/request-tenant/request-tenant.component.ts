import {AfterViewInit, Component, OnInit} from '@angular/core';

import {RequestTenant} from "../../../../model/request-tenant";

import {RequestTenantService} from "../../../../services/request-tenant.service";

@Component({
  selector: 'app-request-tenant',
  templateUrl: './request-tenant.component.html',
  styleUrls: ['./request-tenant.component.css']
})
export class RequestTenantComponent implements OnInit, AfterViewInit {
  Request: RequestTenant;
  request: RequestTenant[] = [];
  constructor(private requestService: RequestTenantService ) {
    this.Request = {} as RequestTenant;
  }
  ngAfterViewInit() {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.getAllRequestVehicule();
  }
  private getAllRequestVehicule(){
    this.requestService.getAll().subscribe((response: any) =>{
      this.request = response.request_tenant;
    });
  }
}
