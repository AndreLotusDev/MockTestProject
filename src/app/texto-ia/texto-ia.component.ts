import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-texto-ia',
  templateUrl: './texto-ia.component.html',
  styleUrls: ['./texto-ia.component.css']
})
export class TextoIaComponent implements OnInit {

  dataHoje = new Date();
  constructor() { }

  ngOnInit() {
  }

}
