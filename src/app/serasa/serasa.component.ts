import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  selector: 'app-serasa',
  templateUrl: './serasa.component.html',
  styleUrls: ['./serasa.component.css']
})
export class SerasaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
