import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {RegisterTenantService} from "../../../services/register-tenant.service";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";

@Component({
  selector: 'app-profile-tenant',
  templateUrl: './profile-tenant.component.html',
  styleUrls: ['./profile-tenant.component.css']
})
export class ProfileTenantComponent implements OnInit{
  user: any;
  imageprofile:any;
  userId: number | null;
  constructor(private storage: Storage,private route: ActivatedRoute, private userService: RegisterTenantService) {
    this.userId = this.userService.getTenantId();
  }
  profile = {imageUrl:'',tenantId:0};
  DOC={pdfUrl:'',tenantId:0};

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      this.userService.getUserById(userId).subscribe((data:any) => {
        this.user = data;
      });
    });
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      this.userService.getimageprofile(userId).subscribe((data:any) => {
        this.imageprofile = data;

      });
    });
  }
  async onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      console.log('Archivo seleccionado:', file.name);

      const storageRef = ref(this.storage, `imagesprofiletenant/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        this.profile.imageUrl = downloadURL;

        console.log('URL de descarga:', downloadURL);
      } catch (error) {
        console.error('Error al cargar el archivo en Firebase Storage:', error);
      }
    }
  }

  async onFileSelectedAntecedent(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      console.log('Archivo seleccionado:', file.name);

      const storageRef = ref(this.storage, `DocAntecedentPenal/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        this.DOC.pdfUrl = downloadURL;

        console.log('URL de descarga:', downloadURL);
      } catch (error) {
        console.error('Error al cargar el archivo en Firebase Storage:', error);
      }
    }

    const tenantId = this.userService.getTenantId();
    if (tenantId!== null) {
      this.DOC.tenantId = tenantId;
      this.userService.adddoccriminalprofile(this.DOC).subscribe((data: any) => {
        console.log('Documento de Antecedentes Penales Subido:', data.id);
      });
    } else {
      console.error('Error: tenantId es nulo');
    }

  }

  //Update de imagen de perfil
  onSubmitProfileTenant() {
    const tenantId  = this.userService.getTenantId();

    if (tenantId !== null) {
      this.profile.tenantId = tenantId ;

      this.userService.updateimageprofile(this.profile).subscribe((data: any) => {
        console.log('Imagen de Perfil creada:', data.id);
      });
    } else {
      console.error('Error: ownerId es nulo');
    }
  }

}
