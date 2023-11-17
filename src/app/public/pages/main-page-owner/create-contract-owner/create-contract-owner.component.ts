import {Component, OnInit} from '@angular/core';
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-contract-owner',
  templateUrl: './create-contract-owner.component.html',
  styleUrls: ['./create-contract-owner.component.css']
})
export class CreateContractOwnerComponent implements  OnInit{
  pdfSrc="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  userId: number | null;
  vehicleId: string | null;
  getvehicule:any;
  constructor(

    private storage: Storage,
    private userService: RegisterOwnerService,
    private route: ActivatedRoute
  ) {
    this.userId = this.userService.getOwnerId();
    this.vehicleId = this.userService.getOwnerVehicleId();
  }
  vehicule = {vehicleId:"",ownerId:0,pdf:""};

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (this.vehicleId != null) {
        if (this.userId !=null)
        {
          this.userService.getvehiculecontract(this.vehicleId, this.userId).subscribe((data: any) => {
            this.getvehicule = data;
          });
        }
      }
    });
  }

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      console.log('Archivo seleccionado:', file.name);

      const storageRef = ref(this.storage, `contrato/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        this.vehicule.pdf = downloadURL;

        console.log('URL de descarga:', downloadURL);
      } catch (error) {
        console.error('Error al cargar el archivo en Firebase Storage:', error);
      }
    }
  }

  onSubmitVehicule() {
    const ownerId = this.userService.getOwnerId();
    const vehicleId = this.userService.getOwnerVehicleId();

    if (ownerId !== null) {
      this.vehicule.ownerId = ownerId;

      if (vehicleId !== null) {
        this.vehicule.vehicleId = vehicleId;

        this.userService.addContractVehicule(this.vehicule).subscribe((data: any) => {
          console.log('Contrato creado:', data);
          this.userService.setOwnerVehicleId(vehicleId);
        });
      } else {
        console.error('Error: vehicleId es nulo');
        alert("EL VEHICULO NO SE HA REGISTRADO ")
      }
    } else {
      console.error('Error: ownerId es nulo');

    }
  }

}
