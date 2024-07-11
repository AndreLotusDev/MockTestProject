import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SkeletonModule } from 'primeng/skeleton';
import { TabChangerService } from '../tab-change/tab-changer.service';

@Component({
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatTabsModule,
    MatCardModule,
    SkeletonModule,
  ],
  selector: 'app-dados-redes-sociais',
  templateUrl: './dados-redes-sociais.component.html',
  styleUrls: ['./dados-redes-sociais.component.css'],
})
export class DadosRedesSociaisComponent implements OnInit {
  public isLoading = true;
  readonly tabChangeService = inject(TabChangerService);

  constructor() {}

  ngOnInit() {
    this.tabChangeService.tabChange.subscribe(() => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    });
  }
}
