import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/base.service";
import {RequestTenant} from "../model/request-tenant";
import {LoginOwnerPost} from "../model/login-owner-post";

@Injectable({
  providedIn: 'root'
})
export class LoginOwnerService {

  private apiUrl = 'http://localhost:3000/api/v1/users'; // Cambia la URL según la configuración de tu servidor
  private currentUserId: string = '';
  constructor(private http: HttpClient) {}

  addUser(user: any) {
    user.userid = 'tenant';
    return this.http.post(this.apiUrl, user);
  }
  getUserById(userId: string) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
  setCurrentUserId(userId: string) {
    this.currentUserId = userId;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }
}
