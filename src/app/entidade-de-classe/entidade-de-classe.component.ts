import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [
    MatCardModule
  ],
  selector: 'app-entidade-de-classe',
  templateUrl: './entidade-de-classe.component.html',
  styleUrls: ['./entidade-de-classe.component.css']
})
export class EntidadeDeClasseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
