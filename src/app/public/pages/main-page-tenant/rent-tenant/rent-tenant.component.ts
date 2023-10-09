import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RentedVehicles} from "../../../model/rented-vehicles";
import {RentdTenantService} from "../../../services/rentd-tenant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rent-tenant',
  templateUrl: './rent-tenant.component.html',
  styleUrls: ['./rent-tenant.component.css']
})
export class RentTenantComponent  implements OnInit, AfterViewInit{
  Rented_Vehicles: RentedVehicles;
  rented: RentedVehicles[] = [];
  responsiveOptions: any[] | undefined;
  constructor(private rentedService: RentdTenantService) {
    this.Rented_Vehicles = {} as RentedVehicles;
  }
    ngAfterViewInit() {
      throw new Error('Method not implemented.');
    }
  ngOnInit() {
    this.getAllRentedVehicule();
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
  private getAllRentedVehicule(){
    this.rentedService.getAll().subscribe((response: any) =>{
      this.rented = response.rented_tenant;
    });
  }

}
