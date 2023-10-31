import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {RegisterOwnerService} from "../../../services/register-owner.service";

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent implements  OnInit{
  email = '';
  password = '';

  constructor(
    private router: Router,
    private registerOwnerService: RegisterOwnerService
  ) {}
  ngOnInit(): void {
    // En lugar de suscribirte a loadUserData() en el componente, puedes llamar a loadUserData() y luego cargar los datos en getUserByEmail() cuando sea necesario.
    this.registerOwnerService.loadUserData();
  }

  // login() {
  //   // Asegúrate de que los datos se hayan cargado antes de intentar buscar al usuario.
  //   if (this.registerOwnerService.isDataLoaded()) {
  //     const user = this.registerOwnerService.getUserByEmail(this.email);
  //     console.log('User:', user);
  //     if (user) {
  //       if (user.password === this.password) {
  //         console.log('Acceso concedido');
  //         this.router.navigate(['/owner/main-page-owner', user.id]);
  //       } else {
  //         console.log('Contraseña incorrecta');
  //       }
  //     } else {
  //       console.log('Usuario no encontrado');
  //     }
  //   } else {
  //     console.log('Datos de usuario no cargados');
  //   }
  // }

  // login() {
  //   const user = this.registerOwnerService.getUserByEmail(this.email);
  //
  //   if (user) {
  //     if (user.password === this.password) {
  //       console.log('Acceso concedido');
  //       this.router.navigate(['/owner/main-page-owner', user.id]);
  //     } else {
  //       console.log('Contraseña incorrecta');
  //     }
  //   } else {
  //     console.log('Usuario no encontrado');
  //   }
  // }
}
