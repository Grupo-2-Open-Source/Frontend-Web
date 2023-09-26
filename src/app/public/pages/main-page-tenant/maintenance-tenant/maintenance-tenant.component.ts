import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-maintenance-tenant',
  templateUrl: './maintenance-tenant.component.html',
  styleUrls: ['./maintenance-tenant.component.css']
})
export class MaintenanceTenantComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
    });
  }
}
