import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RentedVehicles} from "../../../model/rented-vehicles";
import {RentdTenantService} from "../../../services/rentd-tenant.service";
import {RentdOwnerService} from "../../../services/rentd-owner.service";
import {ActivatedRoute} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";

@Component({
  selector: 'app-rent-owner',
  templateUrl: './rent-owner.component.html',
  styleUrls: ['./rent-owner.component.css']
})
export class RentOwnerComponent implements OnInit, AfterViewInit{
  Rented_Vehicles: RentedVehicles;
  rented: RentedVehicles[] = [];
  responsiveOptions: any[] | undefined;
  user: any;
  constructor(private route: ActivatedRoute,private userService:RegisterOwnerService) {
    this.Rented_Vehicles = {} as RentedVehicles;
  }
  ngAfterViewInit() {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {

    this.route.params.subscribe((params) => {
      const ownerId = params['id']; // Obtén el id del usuario de la URL
      this.userService.getAlldata(ownerId).subscribe((data:any) => {
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
  eliminarVehiculo(ownerId: string, vehiculeId: string) {
    this.userService.deltevehicule(ownerId, vehiculeId)
      .subscribe({
        next: (response: any) => {
          console.log('Vehículo eliminado:', response);
          this.user = this.user.filter((vehicle: any) => vehicle.id !== vehiculeId);
        },
        error: (error: any) => {
          console.error('Error al eliminar el vehículo:', error);
        }
      });
  }


}
