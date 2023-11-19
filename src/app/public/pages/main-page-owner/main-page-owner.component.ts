import { Component } from '@angular/core';
import {Storage} from "@angular/fire/storage";
import {RegisterOwnerService} from "../../services/register-owner.service";

@Component({
  selector: 'app-main-page-owner',
  templateUrl: './main-page-owner.component.html',
  styleUrls: ['./main-page-owner.component.css']
})
export class MainPageOwnerComponent {
  userId: number | null;
  country='';
  constructor(private userService: RegisterOwnerService) {
    this.userId = this.userService.getOwnerId();
  }
}
