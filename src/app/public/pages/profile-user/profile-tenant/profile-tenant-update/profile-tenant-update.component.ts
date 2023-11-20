import {Component, OnInit} from '@angular/core';
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {ActivatedRoute} from "@angular/router";
import {RegisterTenantService} from "../../../../services/register-tenant.service";

@Component({
  selector: 'app-profile-tenant-update',
  templateUrl: './profile-tenant-update.component.html',
  styleUrls: ['./profile-tenant-update.component.css']
})
export class ProfileTenantUpdateComponent{
  user: any;

  userId: number | null;
  constructor(private route: ActivatedRoute, private userService: RegisterTenantService) {
    this.userId = this.userService.getTenantId();
  }
  profileData = {id: 0, email: '', lastName: '', firstName: '', phoneNumber: ''};

  //Update de imagen de perfil
  onSubmitProfileData() {
    const tenantId  = this.userService.getTenantId();

    if (tenantId !== null) {
      this.profileData.id = tenantId;

      this.userService.updateProfileTenant(this.profileData).subscribe((data: any) => {
        console.log('Datos actualizados del tenant con el id:', data.id);
      });
    } else {
      console.error('Error: ownerId es nulo');
    }
  }
}
