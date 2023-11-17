import {Component, OnInit} from '@angular/core';
import {Storage} from "@angular/fire/storage";
import {ActivatedRoute} from "@angular/router";
import {RegisterTenantService} from "../../../services/register-tenant.service";

@Component({
  selector: 'app-pay-car-rental',
  templateUrl: './pay-car-rental.component.html',
  styleUrls: ['./pay-car-rental.component.css']
})
export class PayCarRentalComponent implements  OnInit{
  ownerId: number | null;
  user:any;
  vehiculeId: string | null;
  userId: any;
  constructor(private route: ActivatedRoute, private userService: RegisterTenantService) {
    this.userId = this.userService.getTenantId();
    this.ownerId=this.userService.getOwnerId();
    this.vehiculeId=this.userService.getVehicleId();
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (this.ownerId != null) {
        if (this.vehiculeId != null) {
          this.userService.getdatapayment(this.ownerId, this.vehiculeId).subscribe((data: any) => {
            this.user = data;
          });
        }
      }
    });
  }


}
