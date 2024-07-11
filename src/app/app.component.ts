import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TextoIaComponent } from './texto-ia/texto-ia.component';
import { CommonModule } from '@angular/common';
import { DiarioDaUniaoComponent } from './diario-da-uniao/diario-da-uniao.component';
import { DadosRedesSociaisComponent } from './dados-redes-sociais/dados-redes-sociais.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebComponent } from './web/web.component';
import { SearchService } from './search/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { TabChangerService } from './tab-change/tab-changer.service';
import { EntidadeDeClasseComponent } from './entidade-de-classe/entidade-de-classe.component';
import { SerasaComponent } from './serasa/serasa.component';

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
    DashboardComponent,
    WebComponent,
    ReactiveFormsModule,
    ButtonModule,
    EntidadeDeClasseComponent,
    SerasaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public readonly searchService = inject(SearchService);
  public readonly tabService = inject(TabChangerService);
  public formControl = new FormControl<string>('');

  title = 'monitora-amazonas';

  constructor() { }

  search() {
    if (this.formControl.value) {
      this.searchService.search(this.formControl.value);
    }
  }

  onTabChange() {
    this.tabService.tabChange.next(true);
  }
}
