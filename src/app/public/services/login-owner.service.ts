import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/base.service";
import {RequestTenant} from "../model/request-tenant";
import {LoginOwnerPost} from "../model/login-owner-post";

@Injectable({
  providedIn: 'root'
})
export class LoginOwnerService extends BaseService<LoginOwnerPost>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint ='/users';
  }
}
