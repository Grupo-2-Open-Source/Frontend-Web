import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {RequestTenant} from "../model/request-tenant";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestTenantService extends BaseService<RequestTenant> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint ='/tenant';
  }
}
