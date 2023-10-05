import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RentedVehicles} from "../../../model/rented-vehicles";
import {RentdTenantService} from "../../../services/rentd-tenant.service";
import {ToolbarComponent} from "../../component/toolbar-tenant/toolbar.component";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent  {

  rented: RentedVehicles[] = [];
  constructor(private conte:RentdTenantService) {

  }

}
