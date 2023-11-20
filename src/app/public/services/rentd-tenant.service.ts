import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {RentedVehicles} from "../model/rented-vehicles";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RentdTenantService extends BaseService<RentedVehicles>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint ='/tenant';
  }
}
