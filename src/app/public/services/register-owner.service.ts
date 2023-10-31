import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterOwnerService{
  private apiUrl = 'http://localhost:3000/api/v1/users'; // Cambia la URL según la configuración de tu servidor
  private currentUserId: string = '';
  private users: any[] = [];
  private dataLoaded = true;
  constructor(private http: HttpClient) {}

  loadUserData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        this.users = data.users;
        this.dataLoaded = true; // Marca los datos como cargados
      })
    );
  }


  isDataLoaded(): boolean {
    return this.dataLoaded; // Devuelve true si los datos se han cargado, de lo contrario, devuelve false.
  }

  getUserByEmail(email: string): any {
    return this.users.find((user) => user.email === email);
  }
  addUser(user: any) {
    user.userid = 'owner';
    return this.http.post(this.apiUrl, user);
  }
  getUserById(userId: string) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
  // getUserByEmail(email: string): Observable<any> {
  //   // Deberías implementar la lógica para buscar un usuario por correo electrónico en la respuesta del servicio.
  //   // Aquí, devuelvo un usuario de ejemplo solo para demostrar el concepto.
  //
  //   return this.http.get(this.apiUrl).pipe(
  //     map((response: any) => {
  //       const user = response.users.find((user: any) => user.email === email);
  //       return user;
  //     })
  //   );
  // }
  setCurrentUserId(userId: string) {
    this.currentUserId = userId;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }
}
