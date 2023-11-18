import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegisterOwnerService} from "../../../../services/register-owner.service";

@Component({
  selector: 'app-profile-rent-tenant',
  templateUrl: './profile-rent-tenant.component.html',
  styleUrls: ['./profile-rent-tenant.component.css']
})
export class ProfileRentTenantComponent implements  OnInit{
  user:any;
  imagetenant:any;
  ownerId: number | null;
  tenantId: number| null;
  constructor(private route: ActivatedRoute, private userService: RegisterOwnerService) {
    this.ownerId = this.userService.getOwnerId();
    this.tenantId = this.userService.getTenantId();

  }
  ngOnInit() {
    const tenantIdAsString: string = String(this.tenantId);
      this.userService.getProfileByrent(tenantIdAsString).subscribe((data:any) => {
        this.user = data;
      });
      this.userService.getimageprofilerent(tenantIdAsString).subscribe((response:any)=>{
        this.imagetenant=response;
      });
  }

  confirmrequest() {
    const rentalId =this.userService.getRentalId();
    const tenantId=this.userService.getTenantId();
    if (rentalId != null) {
      if (tenantId != null) {
        this.userService.confirmrequest(rentalId, tenantId).subscribe((response: any) => {
          console.log('Solicitud confirmada:', response.id);
        });
      }
    }
  }
  cancelrequest() {
    const rentalId =this.userService.getRentalId();
    const tenantId=this.userService.getTenantId();
    if (rentalId != null) {
      if (tenantId != null) {
        this.userService.cancelrequest(rentalId, tenantId).subscribe((response: any) => {
          console.log('Solicitud cancelada:', response.id);
        });
      }
    }
  }
}
