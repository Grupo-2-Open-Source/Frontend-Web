import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {getStorage, ref} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class RegisterOwnerService{
  private apiUrl = 'http://localhost:8080/api/v1/user/register/owner';
  private apiUrllogin='http://localhost:8080/api/v1/user/login/owner';
  private  apiUrlprofile='http://localhost:8080/api/v1/profiles/owner';

  private  apiUrlregistervehicule='http://localhost:8080/api/v1/vehicles/owner/register';
  private  apiUrlrentgetAll='http://localhost:8080/api/v1/vehicles/owner/getAll';

  private  apiUrldeletedvehicule='http://localhost:8080/api/v1/vehicles/delete';
  private  apiUrlcontractvehicule='http://localhost:8080/api/v1/vehicles/register/owner/create-contract';
  private  apiUrlgetvehiculecontract ='http://localhost:8080/api/v1/vehicles/owner';

  private  apiUrlpostimageUrl ='http://localhost:8080/api/v1/profiles/owner/image';
  private  apiUrlupdateimageUrl ='http://localhost:8080/api/v1/profiles/owner/image-url/put';
  private  apiUrlgetimageUrl ='http://localhost:8080/api/v1/profiles/owner/image-url/get';

  private apiUrlgetnotifications='http://localhost:8080/api/v1/notifications/owner';

  private apiUrlgetAllRents='http://localhost:8080/api/v1/rentals/getAllRentOwner';

  private apiUrlconfirmrequest='http://localhost:8080/api/v1/rentals/confirm';

  private apiUrlcalcelrequest='http://localhost:8080/api/v1/rentals/cancel';

  private currentUserId: number = 0;
  private users: any[] = [];
  private dataLoaded = true;
  constructor(private http: HttpClient) {}

  // loadUserData(): Observable<any> {
  //   return this.http.get(this.apiUrl).pipe(
  //     map((data: any) => {
  //       this.users = data;
  //       this.dataLoaded = true; // Marca los datos como cargados
  //     })
  //   );
  // }


//agregar un propietario
  addUser(ownerData: any): Observable<any> {
    return this.http.post(this.apiUrl, ownerData);
  }
  //logearse como propietario
  logins(ownerData:any): Observable<any> {
    return this.http.post(this.apiUrllogin, ownerData).pipe(
      tap((response: any) => {
        const id= response.id;
        if (id) {
          localStorage.setItem('id', id);
        }
      })
    );
  }
  //data para profile
  getUserById(userId: string) {
    const url = `${this.apiUrlprofile}/${userId}`;
    return this.http.get(url);
  }
  //registro de vehiculos del owner
  addVehiculesOwner(vehicleData: any): Observable<any> {
    return this.http.post(this.apiUrlregistervehicule, vehicleData);
  }

  //return datos por id owner para componente rent
  getAlldata(ownerId:string){
    const  url=`${this.apiUrlrentgetAll}/${ownerId}`;
    return this.http.get(url);
  }

  //eliminar vehiculo por id de owner y id de vehiculo
  deltevehicule(ownerId:string,vehiculeId:string){
    const  url=`${this.apiUrldeletedvehicule}/${ownerId}/${vehiculeId}`;
    return this.http.delete(url);
  }

  //crear contrato de vehiculo
  addContractVehicule(vehiculeData:any){
    return this.http.post(this.apiUrlcontractvehicule, vehiculeData);
  }
  //mostrar informacion en pagina contrato de vehiculo
  getvehiculecontract(vehiculeId:string,ownerId:number){
    const  url=`${this.apiUrlgetvehiculecontract}/${vehiculeId}/${ownerId}`;
    return this.http.get(url);
  }

  //POST-generar imagen de perfil de owner
  addimageprofile(imageprofileData:any){
    return this.http.post(this.apiUrlpostimageUrl,imageprofileData);
  }

  //PUT-update image de perfil de owner
  updateimageprofile(imagupdatedata:any){
    return this.http.put(this.apiUrlupdateimageUrl,imagupdatedata);
  }

  //GET- muestra imagen de perfil de owner
  getimageprofile(ownerId:string){
    const  url=`${this.apiUrlgetimageUrl}/${ownerId}`;
    return this.http.get(url);
  }
  //devuelve las notificaciones hechas
  getnotificationsowner(ownerId:string){
    const  url=`${this.apiUrlgetnotifications}/${ownerId}`;
    return this.http.get(url);
  }
  //devuelve lista de rentas por cada vehiculo
  getAllRents(ownerId:number,vehicleId:string){
    const  url=`${this.apiUrlgetAllRents}/${ownerId}/${vehicleId}`;
    return this.http.get(url);
  }

  //confirma renta
  confirmrequest(rentalId:number,tenantId:number){
    const  url=`${this.apiUrlconfirmrequest}/${rentalId}/${tenantId}`;
    return this.http.put(url, {});
  }
  //cancelar renta
  cancelrequest(rentalId:number,tenantId:number){
    const  url=`${this.apiUrlcalcelrequest}/${rentalId}/${tenantId}`;
    return this.http.put(url,{});
  }




  setCurrentUserId(userId: number) {
    this.currentUserId = userId;
  }
  getCurrentUserId() {
    return this.currentUserId;
  }


//GUARGA LOS DATOS DEL ID DEL OWNER
  getOwnerId(): number | null {
    const ownerId = localStorage.getItem('id');
    return ownerId ? +ownerId : null;
  }
  setOwnerId(id: number): void {
    localStorage.setItem('id', id.toString());
  }
//GUARGA LOS DATOS DEL ID DEL VEHICULO
  getOwnerVehicleId(): string | null {
    const vehicleId = localStorage.getItem('vehicleId');
    return vehicleId !== null ? vehicleId : null;
  }

  setOwnerVehicleId(vehicleId: string): void {
    localStorage.setItem('vehicleId', vehicleId);
  }

}
