import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TabChangerService } from '../tab-change/tab-changer.service';
import { take } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  selector: 'app-texto-ia',
  templateUrl: './texto-ia.component.html',
  styleUrls: ['./texto-ia.component.css'],
})
export class TextoIaComponent implements OnInit {
  dataHoje = new Date();
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
