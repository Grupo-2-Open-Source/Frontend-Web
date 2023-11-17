import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RentedVehicles} from "../../../../../model/rented-vehicles";
import {ActivatedRoute} from "@angular/router";
import {RegisterOwnerService} from "../../../../../services/register-owner.service";

@Component({
  selector: 'app-list-rent-owner',
  templateUrl: './list-rent-owner.component.html',
  styleUrls: ['./list-rent-owner.component.css']
})
export class ListRentOwnerComponent implements OnInit , AfterViewInit{
  userId: number | null;
  vehicleId: string | null;
  responsiveOptions: any[] | undefined;
  user: any;
  constructor(private route: ActivatedRoute,private userService:RegisterOwnerService) {
    this.userId = this.userService.getOwnerId();
    this.vehicleId = this.userService.getOwnerVehicleId();
  }
  ngAfterViewInit() {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {

    this.route.params.subscribe((params) => {
      const ownerId = params['id']; // Obtén el id del usuario de la URL
      if (this.userId != null) {
        if (this.vehicleId != null) {
          this.userService.getAllRents(this.userId, this.vehicleId).subscribe((data: any) => {
            this.user = data;
          });
        }
      }
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

  //cambiar a confirmar y solicitar alquiler
  confirmrequest(rentalId: number, tenantId:number) {
    this.userService.confirmrequest(rentalId, tenantId).subscribe((response: any) =>{
      console.log('Solicitud confirmada:', response.id);
      });
  }
  cancelrequest(rentalId: number, tenantId:number) {
    this.userService.cancelrequest(rentalId, tenantId).subscribe((response: any) =>{
      console.log('Solicitud cancelada:', response.id);
    });
  }
  reloadPage() {
    window.location.reload();
  }

}
