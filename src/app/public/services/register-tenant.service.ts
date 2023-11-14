import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterTenantService {
  private apiUrl = 'http://localhost:8080/api/v1/user/register/tenant';
  private apiUrllogin='http://localhost:8080/api/v1/user/login/tenant';
  private  apiUrlprofile='http://localhost:8080/api/v1/profiles/tenant';
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
  addUsertenant(ownerData: any): Observable<any> {
    return this.http.post(this.apiUrl, ownerData);
  }

  //logearse como propietario
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
  setCurrentUserId(userId: number) {
    this.currentUserId = userId;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }
  getTenantId(): number | null {
    const ownerId = localStorage.getItem('id');
    return ownerId ? +ownerId : null;
  }
}
