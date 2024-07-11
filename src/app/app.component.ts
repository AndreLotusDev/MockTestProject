import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TextoIaComponent } from './texto-ia/texto-ia.component';
import { CommonModule } from '@angular/common';
import { DiarioDaUniaoComponent } from './diario-da-uniao/diario-da-uniao.component';
import { DadosRedesSociaisComponent } from "./dados-redes-sociais/dados-redes-sociais.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    TextoIaComponent,
    CommonModule,
    DiarioDaUniaoComponent,
    DadosRedesSociaisComponent,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monitora-amazonas';
}
