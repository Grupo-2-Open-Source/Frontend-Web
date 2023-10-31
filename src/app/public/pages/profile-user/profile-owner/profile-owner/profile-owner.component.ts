import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegisterOwnerService} from "../../../../services/register-owner.service";

@Component({
  selector: 'app-profile-owner',
  templateUrl: './profile-owner.component.html',
  styleUrls: ['./profile-owner.component.css']
})
export class ProfileOwnerComponent implements OnInit{
  user: any;
  constructor(private route: ActivatedRoute, private userService: RegisterOwnerService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['id']; // Obtén el id del usuario de la URL
      this.userService.getUserById(userId).subscribe((data:any) => {
        this.user = data;
      });
    });
  }
  //
  // id=0;
  // name='';
  // lastName='';
  // iphone=0;
  // gmail='';
  // numbercar=0;
  // sidenav: any;

}
