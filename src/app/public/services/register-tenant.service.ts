import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterTenantService {
  private apiUrl = 'http://localhost:8080/api/v1/user/register/tenant';
  private apiUrllogin='http://localhost:8080/api/v1/user/login/tenant';
  private apiUrlprofile='http://localhost:8080/api/v1/profiles/tenant';

  //vehiculos alquilados por arrendatario
  private  apiUrlgetAllvehiculesRent='http://localhost:8080/api/v1/vehicles/tenant/rent';
//api para perfil de arrendatario
  private  apiUrlpostimageUrl ='http://localhost:8080/api/v1/profiles/tenant/image';
  private  apiUrlupdateimageUrl ='http://localhost:8080/api/v1/profiles/tenant/image-url/put';
  private  apiUrlgetimageUrl ='http://localhost:8080/api/v1/profiles/tenant/image-url/get';
  private  apiUrlpostdocUrl ='http://localhost:8080/api/v1/profiles/tenant/documents/criminal-records';
//api para solicitudes de arrendatario
  private apiUrlgetrequests='http://localhost:8080/api/v1/requests/tenant';
  //api para devuelve todos los  vehiculos
  private apiUrlvehiculesgetAll='http://localhost:8080/api/v1/vehicles/getAllData';

  //api para solicitar alquiler de vehiculo
  private apiUrlrequiredvehicule='http://localhost:8080/api/v1/rentals/request';
  //api para buscar vehiculo
  private apiUrlvehiculesearch='http://localhost:8080/api/v1/vehicles/tenant/search';

  private  apiUrlpayment='http://localhost:8080/api/v1/rentals/payment';

  private apiUrlProfileTenantUpdate = 'http://localhost:8080/api/v1/profiles/tenant/update/data/profile';
  private apiUrlGetOwnersByTenant = 'http://localhost:8080/api/v1/maintenances/tenant/list-owners';

  private currentUserId: number = 0;
  private users: any[] = [];
  private dataLoaded = true;
  constructor(private http: HttpClient) {}

  loadUserDatatenant(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        this.users = data;
        this.dataLoaded = true; // Marca los datos como cargados
      })
    );
  }
  //agregar un arrendatario
  addUsertenant(tenantData: any): Observable<any> {
    return this.http.post(this.apiUrl, tenantData);
  }
  //logearse como arrendatario
  logins(tenantData:any): Observable<any> {
    return this.http.post(this.apiUrllogin, tenantData).pipe(
      tap((response: any) => {
        const id= response.id;
        if (id) {
          localStorage.setItem('id', id);
        }
      })
    );
  }
  //data para profile arrendatario
  getUserById(userId: string) {
    const url = `${this.apiUrlprofile}/${userId}`;
    return this.http.get(url);
  }
  //return datos por id tenant para componente rent
  getAlldatarent(tenantId:string){
    const  url=`${this.apiUrlgetAllvehiculesRent}/${tenantId}`;
    return this.http.get(url);
  }


  //POST-generar imagen de perfil de tenant
  addimageprofile(imageprofileData:any){
    return this.http.post(this.apiUrlpostimageUrl,imageprofileData);
  }

  //PUT-update image de perfil de tenant
  updateimageprofile(imagupdatedata:any){
    return this.http.put(this.apiUrlupdateimageUrl,imagupdatedata);
  }

  //GET- muestra imagen de perfil de tenant
  getimageprofile(tenantId:string){
    const  url=`${this.apiUrlgetimageUrl}/${tenantId}`;
    return this.http.get(url);
  }
  //POST-genera y guarda el documento de antecedentes penales
  adddoccriminalprofile(docprofileData:any){
    return this.http.post(this.apiUrlpostdocUrl,docprofileData);
  }

  //Devuelve una lista de owner a los cuales se les ha enviado la solicitud de alquiler
  getrentrequests(tenantId:string){
    const  url=`${this.apiUrlgetrequests}/${tenantId}`;
    return this.http.get(url);
  }
  //Mantenimeinto
  getOwnersByTenantId(tenantId:string){
    const  url=`${this.apiUrlGetOwnersByTenant}/%7Bid%7D?tenantId=${tenantId}`;
    return this.http.get(url);
  }

//Mostrar una lista de vehiculo de todos los owners
  getAllvehiculesowner(){
    const  url=`${this.apiUrlvehiculesgetAll}`;
    return this.http.get(url);
  }
//Solitar alquiler de vehiculo
  requiredvehicule(vehiculeId:string,ownerId:number,tenantId:number){
    const requireddata = {
      vehiculeId: vehiculeId,
      ownerId: ownerId,
      tenantId: tenantId
    };
    return this.http.put(this.apiUrlrequiredvehicule,requireddata);
  }

  //Buscar vehiculos
  SearchVehicule(vehiculeData: any): Observable<any> {
    return this.http.post(this.apiUrlvehiculesearch, vehiculeData);
  }
  //mostrar datos para payment
  getdatapayment(ownerId:number,vehicleId:string){
    const  url=`${this.apiUrlpayment}/${ownerId}/${vehicleId}`;
    return this.http.get(url);
  }

  //Actualizar datos de tenant
  updateProfileTenant(tenantData:any){
    return this.http.put(this.apiUrlProfileTenantUpdate,tenantData);
  }

  setCurrentUserId(userId: number) {
    this.currentUserId = userId;
  }
  getCurrentUserId() {
    return this.currentUserId;
  }
  //GUARGA LOS DATOS DEL ID DEL tenant
  getTenantId(): number | null {
    const tenantId = localStorage.getItem('id');
    return tenantId ? +tenantId : null;
  }
  setTenantId(id: number): void {
    localStorage.setItem('id', id.toString());
  }
  //GUARGA LOS DATOS DEL ID DEL VEHICULO
  getVehicleId(): string | null {
    const vehicleId = localStorage.getItem('vehicleId');
    return vehicleId !== null ? vehicleId : null;
  }

  setVehicleId(vehicleId: string): void {
    localStorage.setItem('vehicleId', vehicleId);
  }
  //GUARGA LOS DATOS DEL ID DEL OWNER
  getOwnerId(): number | null {
    const ownerId = localStorage.getItem('ownerId');
    return ownerId ? +ownerId : null;
  }
  setOwnerId(ownerId: number): void {
    localStorage.setItem('ownerId', ownerId.toString());
  }

}
