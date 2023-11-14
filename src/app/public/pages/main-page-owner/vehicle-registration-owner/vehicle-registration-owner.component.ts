import { Component } from '@angular/core';
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {Router} from "@angular/router";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-vehicle-registration-owner',
  templateUrl: './vehicle-registration-owner.component.html',
  styleUrls: ['./vehicle-registration-owner.component.css']
})
export class VehicleRegistrationOwnerComponent {
  selectedFile: File | null = null;
  constructor(
    private storage: Storage,
    private userService: RegisterOwnerService
  ) {}

  user = {brand: '', model: '',maxVelocity:0,fuelConsumption:0,dimensions:'',
    weight:0,carClass:'',carTransmission:'',rentStatus:'WAITING', location:'',price:0,time:'',amoutthetime:0,ownerId:0,imageUrl:'urll'};

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      console.log('Archivo seleccionado:', file.name);

      const storageRef = ref(this.storage, `images/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        this.user.imageUrl = downloadURL;

        console.log('URL de descarga:', downloadURL);
      } catch (error) {
        console.error('Error al cargar el archivo en Firebase Storage:', error);
      }
    }
  }

  onSubmitVehicule() {
    const ownerId = this.userService.getOwnerId();

    if (ownerId !== null) {
      this.user.ownerId = ownerId;

      // Aquí puedes llamar al servicio para guardar los datos del vehículo en tu base de datos
      this.userService.addVehiculesOwner(this.user).subscribe((data: any) => {
        console.log('Vehículo creado:', data);

        this.user = {
          brand: '',
          model: '',
          maxVelocity: 0,
          fuelConsumption: 0,
          dimensions: '',
          weight: 0,
          carClass: '',
          carTransmission: '',
          rentStatus: 'WAITING',
          location: '',
          price: 0,
          time: '',
          amoutthetime: 0,
          ownerId: ownerId,
          imageUrl: ''
        };

        this.userService.setOwnerId(data.ownerId);
      });
    } else {
      console.error('Error: ownerId es nulo');
    }
  }

  // onSubmitVehicule() {
  //   const ownerId = this.userService.getOwnerId(); // Obtiene el ownerId almacenado en el servicio
  //   if (ownerId !== null) { // Verifica que ownerId no sea nulo
  //     this.user.ownerId = ownerId;
  //     this.userService.addVehiculesOwner(this.user).subscribe((data: any) => {
  //       console.log('Vehiculo creado:', data);
  //       this.user = {
  //         brand: '',
  //         model: '',
  //         maxVelocity: 0,
  //         fuelConsumption: 0,
  //         dimensions: '',
  //         weight: 0,
  //         carClass: '',
  //         carTransmission: '',
  //         rentStatus: 'WAITING',
  //         location: '',
  //         price: 0,
  //         time: '',
  //         amoutthetime: 0,
  //         ownerId: ownerId,
  //         imageUrl:''
  //       };
  //       this.userService.setOwnerId(data.ownerId);
  //     });
  //   } else {
  //     console.error('Error: ownerId es nulo');
  //   }
  // }

}
