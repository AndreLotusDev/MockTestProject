import { Component, inject, OnInit } from '@angular/core';
import { TabChangerService } from '../tab-change/tab-changer.service';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  standalone: true,
  selector: 'app-diario-da-uniao',
  imports: [SkeletonModule],
  templateUrl: './diario-da-uniao.component.html',
  styleUrls: ['./diario-da-uniao.component.css'],
})
export class DiarioDaUniaoComponent implements OnInit {
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
