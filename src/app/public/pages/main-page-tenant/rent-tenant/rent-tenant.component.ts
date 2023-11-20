import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RentedVehicles} from "../../../model/rented-vehicles";
import {RentdTenantService} from "../../../services/rentd-tenant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {RegisterTenantService} from "../../../services/register-tenant.service";

@Component({
  selector: 'app-rent-tenant',
  templateUrl: './rent-tenant.component.html',
  styleUrls: ['./rent-tenant.component.css']
})
export class RentTenantComponent  implements OnInit, AfterViewInit{
  user: any;
  responsiveOptions: any[] | undefined;
  userId: number | null;
  constructor(private route: ActivatedRoute,private userService:RegisterTenantService) {
    this.userId = this.userService.getTenantId();
  }
    ngAfterViewInit() {
      throw new Error('Method not implemented.');
    }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const tenantId = params['id']; // Obtén el id del usuario de la URL
      this.userService.getAlldatarent(tenantId).subscribe((data:any) => {
        this.user= data;
      });
    });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  paymentvehicule(ownerId: number, vehicleId: string){
    this.userService.setOwnerId(ownerId)
    this.userService.setVehicleId(vehicleId);
  }

}
