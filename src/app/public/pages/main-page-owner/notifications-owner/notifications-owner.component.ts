import {Component, OnInit} from '@angular/core';
import {Storage} from "@angular/fire/storage";
import {ActivatedRoute} from "@angular/router";
import {RegisterOwnerService} from "../../../services/register-owner.service";
import {RentedVehicles} from "../../../model/rented-vehicles";
import {NotificationsOwner} from "../../../model/notifications-owner";

@Component({
  selector: 'app-notifications-owner',
  templateUrl: './notifications-owner.component.html',
  styleUrls: ['./notifications-owner.component.css']
})
export class NotificationsOwnerComponent implements OnInit{
  user: any;


  country='';
  constructor(private route: ActivatedRoute, private userService: RegisterOwnerService) {
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['onid']; // Obtén el id del usuario de la URL
      this.userService.getnotificationsowner(userId).subscribe((data:any) => {
        this.user = data;

      });
    });
  }

}
