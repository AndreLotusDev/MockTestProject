import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatTabsModule,
    MatCardModule
  ],
  selector: 'app-dados-redes-sociais',
  templateUrl: './dados-redes-sociais.component.html',
  styleUrls: ['./dados-redes-sociais.component.css']
})
export class DadosRedesSociaisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
