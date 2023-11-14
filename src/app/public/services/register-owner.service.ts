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
  private  apiUrlrentgetAll='http://localhost:8080/api/v1/vehicles/owner';
  private  apiUrldeletedvehicule='http://localhost:8080/api/v1/vehicles/delete';
  private currentUserId: number = 0;
  private users: any[] = [];
  private dataLoaded = true;
  constructor(private http: HttpClient) {}

  loadUserData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        this.users = data;
        this.dataLoaded = true; // Marca los datos como cargados
      })
    );
  }
  //
  // isDataLoaded(): boolean {
  //   return this.dataLoaded; // Devuelve true si los datos se han cargado, de lo contrario, devuelve false.
  // }
  //
  // getUserByEmail(email: string): any {
  //   return this.users.find((user) => user.email === email);
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

  //return datos por id owner
  getAlldata(ownerId:string){
    const  url=`${this.apiUrlrentgetAll}/${ownerId}`;
    return this.http.get(url);
  }

  //eliminar vehiculo por id de owner y id de vehiculo
  deltevehicule(ownerId:string,vehiculeId:string){
    const  url=`${this.apiUrldeletedvehicule}/${ownerId}/${vehiculeId}`;
    return this.http.delete(url);
  }


  setCurrentUserId(userId: number) {
    this.currentUserId = userId;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }


  getOwnerId(): number | null {
    const ownerId = localStorage.getItem('id');
    return ownerId ? +ownerId : null;
  }
  setOwnerId(id: number): void {
    localStorage.setItem('id', id.toString());
  }




  getStorageRef() {
    const storage = getStorage(); // Sin argumentos
    // Devuelve una referencia a la raíz del almacenamiento
    return ref(storage);
  }
}
