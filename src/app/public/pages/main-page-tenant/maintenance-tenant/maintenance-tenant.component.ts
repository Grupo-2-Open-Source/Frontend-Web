import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUpload } from 'primeng/fileupload';

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
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    // Aquí puedes manejar la carga del archivo, por ejemplo, enviarlo al servidor
    if (this.selectedFile) {
      // Realiza acciones con this.selectedFile, como enviarlo al servidor
    }
  }
}
