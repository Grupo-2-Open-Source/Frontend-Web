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
  private  apiUrlprofilerent='http://localhost:8080/api/v1/profiles/tenant';
  private  apiUrlgetimageUrlrent ='http://localhost:8080/api/v1/profiles/tenant/image-url/get';
  private apiUrlProfileOwnerUpdate = 'http://localhost:8080/api/v1/profiles/owner/update/data/profile';
  private apiUrlDocumentTenantCriminal = 'http://localhost:8080/api/v1/profiles/owner/documents/criminal-records-of-tenant';
  private currentUserId: number = 0;
  private users: any[] = [];
  private dataLoaded = true;
  constructor(private http: HttpClient) {}

  addUser(ownerData: any): Observable<any> {
    return this.http.post(this.apiUrl, ownerData);
  }
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
  getUserById(userId: string) {
    const url = `${this.apiUrlprofile}/${userId}`;
    return this.http.get(url);
  }
  addVehiculesOwner(vehicleData: any): Observable<any> {
    return this.http.post(this.apiUrlregistervehicule, vehicleData);
  }
  getAlldata(ownerId:string){
    const  url=`${this.apiUrlrentgetAll}/${ownerId}`;
    return this.http.get(url);
  }
  deltevehicule(ownerId:string,vehiculeId:string){
    const  url=`${this.apiUrldeletedvehicule}/${ownerId}/${vehiculeId}`;
    return this.http.delete(url);
  }
  addContractVehicule(vehiculeData:any){
    return this.http.post(this.apiUrlcontractvehicule, vehiculeData);
  }
  getvehiculecontract(vehiculeId:string,ownerId:number){
    const  url=`${this.apiUrlgetvehiculecontract}/${vehiculeId}/${ownerId}`;
    return this.http.get(url);
  }
  addimageprofile(imageprofileData:any){
    return this.http.post(this.apiUrlpostimageUrl,imageprofileData);
  }
  updateimageprofile(imagupdatedata:any){
    return this.http.put(this.apiUrlupdateimageUrl,imagupdatedata);
  }
  getimageprofile(ownerId:string){
    const  url=`${this.apiUrlgetimageUrl}/${ownerId}`;
    return this.http.get(url);
  }
  getnotificationsowner(ownerId:string){
    const  url=`${this.apiUrlgetnotifications}/${ownerId}`;
    return this.http.get(url);
  }
  getAllRents(ownerId:number,vehicleId:string){
    const  url=`${this.apiUrlgetAllRents}/${ownerId}/${vehicleId}`;
    return this.http.get(url);
  }
  confirmrequest(rentalId:number,tenantId:number){
    const  url=`${this.apiUrlconfirmrequest}/${rentalId}/${tenantId}`;
    return this.http.put(url, {});
  }
  cancelrequest(rentalId:number,tenantId:number){
    const  url=`${this.apiUrlcalcelrequest}/${rentalId}/${tenantId}`;
    return this.http.put(url,{});
  }
  getProfileByrent(userId: string) {
    const url = `${this.apiUrlprofilerent}/${userId}`;
    return this.http.get(url);
  }
  getimageprofilerent(tenantId:string){
    const  url=`${this.apiUrlgetimageUrlrent}/${tenantId}`;
    return this.http.get(url);
  }
  updateProfileOwner(ownerData:any){
    return this.http.put(this.apiUrlProfileOwnerUpdate,ownerData);
  }

  getdocumenttenant(tenantId:string){
    const  url=`${this.apiUrlDocumentTenantCriminal}/${tenantId}`;
    return this.http.get(url);
  }
  setCurrentUserId(userId: number) {
    this.currentUserId = userId;
  }
  getCurrentUserId() {
    return this.currentUserId;
  }




  getOwnerId(): number | null {
    const ownerId = localStorage.getItem('onid');
    return ownerId ? +ownerId : null;
  }
  setOwnerId(id: number): void {
    localStorage.setItem('onid', id.toString());
  }

  getTenantId(): number | null {
    const id = localStorage.getItem('tenantId');
    return id ? +id : null;
  }
  setTenantId(id: number): void {
    localStorage.setItem('tenantId', id.toString());
  }

  getRentalId(): number | null {
    const id = localStorage.getItem('rentalId');
    return id ? +id : null;
  }
  setRentalId(id: number): void {
    localStorage.setItem('rentalId', id.toString());
  }


  getOwnerVehicleId(): string | null {
    const vehicleId = localStorage.getItem('vehicleId');
    return vehicleId !== null ? vehicleId : null;
  }

  setOwnerVehicleId(vehicleId: string): void {
    localStorage.setItem('vehicleId', vehicleId);
  }

}
