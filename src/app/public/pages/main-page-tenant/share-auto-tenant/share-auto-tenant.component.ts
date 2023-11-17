import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RentedVehicles} from "../../../model/rented-vehicles";
import {RentdTenantService} from "../../../services/rentd-tenant.service";
import {RentdOwnerService} from "../../../services/rentd-owner.service";
import {RegisterTenantService} from "../../../services/register-tenant.service";
import {share} from "rxjs";

@Component({
  selector: 'app-share-auto-tenant',
  templateUrl: './share-auto-tenant.component.html',
  styleUrls: ['./share-auto-tenant.component.css']
})
export class ShareAutoTenantComponent   implements OnInit, AfterViewInit{
  user:any;
  searchresponse:any;
  responsiveOptions: any[] | undefined;
  userId: any;
  data = {vehiculeuId:'',ownerId:0,tenantId:0};
  search = {brand: '', model: '',
    weight:0,carClass:'',carTransmission:'', location:'',price:0,time:'',amoutthetime:0};
  constructor(private services : RegisterTenantService) {
    this.userId = this.services.getTenantId();
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
  getAllRentedVehicule(){
    this.services.getAllvehiculesowner().subscribe((response: any) =>{
      this.user= response;
    });
  }
  solicitarvehiculo(vehiculeId:string,ownerId:number,tenantId:number){
    this.services.requiredvehicule(vehiculeId,ownerId,tenantId).subscribe((response: any) =>{
      console.log('Vehiculos buscados:', response.id);
    });
  }
  reloadPage() {
    window.location.reload();
  }
  onSubmitSearch() {
      this.services.SearchVehicule(this.search).subscribe((data: any) => {
        this.searchresponse = data;
        console.log('Vehiculos buscados:', data.id);
        this.search = {
          brand: '',
          model: '',
          weight: 0,
          carClass: '',
          carTransmission: '',
          location: '',
          price: 0,
          time: '',
          amoutthetime: 0,
        };
      });
    }

  //ESTO ES PARA LA LISTA DE VEHICULOS
  //hacer metodo de alquiler , sacando el id del owner , del vehiculo, y ya tenemos el den tenant para
  //hacer la renta, PERO PARA VER ESO SE DEBE TENER EL RESPONSE //ESTE METODO DE DE GETALLTOTAL



  //ESTO ES PARA EL METODO DE BUSQUEDA
  //este metodo debe devolver tambien el id del owner y del vehiculo, para asi poder hacer la renta
  //ESTE ES UN METODO DE SEARCH  Y CON RESPONSE DE ESOS IDS METODO POST

  protected readonly share = share;
}
