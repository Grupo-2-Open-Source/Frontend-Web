import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegisterTenantService} from "../../../../services/register-tenant.service";
import {RegisterOwnerService} from "../../../../services/register-owner.service";

@Component({
  selector: 'app-profile-owner-update',
  templateUrl: './profile-owner-update.component.html',
  styleUrls: ['./profile-owner-update.component.css']
})
export class ProfileOwnerUpdateComponent {
  user: any;

  userId: number | null;
  constructor(private route: ActivatedRoute, private userService: RegisterOwnerService) {
    this.userId = this.userService.getOwnerId();
  }
  profileData = {id: 0, email: '', lastName: '', firstName: '', phoneNumber: ''};

  //Update de imagen de perfil
  onSubmitProfileData() {
    const ownerId  = this.userService.getOwnerId();

    if (ownerId !== null) {
      this.profileData.id = ownerId;

      this.userService.updateProfileOwner(this.profileData).subscribe((data: any) => {
        console.log('Datos actualizados del owner con el id:', data.id);
      });
    } else {
      console.error('Error: ownerId es nulo');
    }
  }

}
