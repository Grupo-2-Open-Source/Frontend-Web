import {Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUpload } from 'primeng/fileupload';
import {RegisterTenantService} from "../../../services/register-tenant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-maintenance-tenant',
  templateUrl: './maintenance-tenant.component.html',
  styleUrls: ['./maintenance-tenant.component.css']
})
export class MaintenanceTenantComponent implements OnInit{
  user: any;
  userId: number | null;
  selectedOption: any;

  constructor(private _snackBar: MatSnackBar, private route: ActivatedRoute, private userService: RegisterTenantService) {
    this.userId = this.userService.getTenantId();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      this.userService.getOwnersByTenantId(userId).subscribe((data:any) => {
        this.user = data;
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
    });
  }
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {

    }
  }
}
