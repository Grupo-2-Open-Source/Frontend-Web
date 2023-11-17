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
  userId: number | null;
  vehicleId: string| null;

  constructor(

    private storage: Storage,
    private userService: RegisterOwnerService
  ) {
    this.userId = this.userService.getOwnerId();
    this.vehicleId = null;

  }

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
  reloadPage() {
    window.location.reload();
  }
  onSubmitVehicule() {
    const ownerId = this.userService.getOwnerId();

    if (ownerId !== null) {
      this.user.ownerId = ownerId;

      this.userService.addVehiculesOwner(this.user).subscribe((data: any) => {
        console.log('Vehículo creado:', data.id);
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
        this.vehicleId = data.id;
        this.userService.setOwnerVehicleId(data.id);
      });
    } else {
      console.error('Error: ownerId es nulo');
    }
  }


}
