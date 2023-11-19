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
  private  apiUrlgetAllvehiculesRent='http://localhost:8080/api/v1/vehicles/tenant/rent';
  private  apiUrlpostimageUrl ='http://localhost:8080/api/v1/profiles/tenant/image';
  private  apiUrlupdateimageUrl ='http://localhost:8080/api/v1/profiles/tenant/image-url/put';
  private  apiUrlgetimageUrl ='http://localhost:8080/api/v1/profiles/tenant/image-url/get';
  private  apiUrlpostdocUrl ='http://localhost:8080/api/v1/profiles/tenant/documents/criminal-records';
  private apiUrlgetrequests='http://localhost:8080/api/v1/requests/tenant';
  private apiUrlvehiculesgetAll='http://localhost:8080/api/v1/vehicles/getAllData';
  private apiUrlrequiredvehicule='http://localhost:8080/api/v1/rentals/request';
  private apiUrlvehiculesearch='http://localhost:8080/api/v1/vehicles/tenant/search';
  private  apiUrlpayment='http://localhost:8080/api/v1/rentals/payment';
  private apiUrlProfileTenantUpdate = 'http://localhost:8080/api/v1/profiles/tenant/update/data/profile';
  private apiUrlGetOwnersByTenant = 'http://localhost:8080/api/v1/maintenances/tenant/list-owners';
  private currentUserId: number = 0;
  private users: any[] = [];
  private dataLoaded = true;
  constructor(private http: HttpClient) {}

  addUsertenant(tenantData: any): Observable<any> {
    return this.http.post(this.apiUrl, tenantData);
  }
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
  getUserById(userId: string) {
    const url = `${this.apiUrlprofile}/${userId}`;
    return this.http.get(url);
  }
  getAlldatarent(tenantId:string){
    const  url=`${this.apiUrlgetAllvehiculesRent}/${tenantId}`;
    return this.http.get(url);
  }

  addimageprofile(imageprofileData:any){
    return this.http.post(this.apiUrlpostimageUrl,imageprofileData);
  }

  updateimageprofile(imagupdatedata:any){
    return this.http.put(this.apiUrlupdateimageUrl,imagupdatedata);
  }

  getimageprofile(tenantId:string){
    const  url=`${this.apiUrlgetimageUrl}/${tenantId}`;
    return this.http.get(url);
  }

  adddoccriminalprofile(docprofileData:any){
    return this.http.post(this.apiUrlpostdocUrl,docprofileData);
  }

  getrentrequests(tenantId:string){
    const  url=`${this.apiUrlgetrequests}/${tenantId}`;
    return this.http.get(url);
  }

  getOwnersByTenantId(tenantId:string){
    const  url=`${this.apiUrlGetOwnersByTenant}/%7Bid%7D?tenantId=${tenantId}`;
    return this.http.get(url);
  }

  getAllvehiculesowner(){
    const  url=`${this.apiUrlvehiculesgetAll}`;
    return this.http.get(url);
  }
  requiredvehicule(vehiculeId:string,ownerId:number,tenantId:number){
    const requireddata = {
      vehiculeId: vehiculeId,
      ownerId: ownerId,
      tenantId: tenantId
    };
    return this.http.put(this.apiUrlrequiredvehicule,requireddata);
  }

  SearchVehicule(vehiculeData: any): Observable<any> {
    return this.http.post(this.apiUrlvehiculesearch, vehiculeData);
  }
  getdatapayment(ownerId:number,vehicleId:string){
    const  url=`${this.apiUrlpayment}/${ownerId}/${vehicleId}`;
    return this.http.get(url);
  }

  updateProfileTenant(tenantData:any){
    return this.http.put(this.apiUrlProfileTenantUpdate,tenantData);
  }




  setCurrentUserId(userId: number) {
    this.currentUserId = userId;
  }
  getCurrentUserId() {
    return this.currentUserId;
  }



  getTenantId(): number | null {
    const tenantId = localStorage.getItem('id');
    return tenantId ? +tenantId : null;
  }
  setTenantId(id: number): void {
    localStorage.setItem('id', id.toString());
  }

  getVehicleId(): string | null {
    const vehicleId = localStorage.getItem('vehicleId');
    return vehicleId !== null ? vehicleId : null;
  }

  setVehicleId(vehicleId: string): void {
    localStorage.setItem('vehicleId', vehicleId);
  }

  getOwnerId(): number | null {
    const ownerId = localStorage.getItem('ownerId');
    return ownerId ? +ownerId : null;
  }
  setOwnerId(ownerId: number): void {
    localStorage.setItem('ownerId', ownerId.toString());
  }

}
