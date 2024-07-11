import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-connection-info',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './connection-info.component.html',
  styleUrl: './connection-info.component.css',
})
export class ConnectionInfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }
  dataHoje = new Date();
}
